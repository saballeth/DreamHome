import { useState } from "react";
import './EditPerfil.css'
import ApiService from "@/apiCalls.service/apiCalls.service";
import { useAuth } from "@/Context/AuthContext";
import AlertExito from "@/components/Alert/AlertExito";

const EditarPerfil = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const auth = useAuth();
    const apiService = new ApiService(auth.token);
    const [errors, setErrors] = useState({
        email: "",
        name: "",
        lastName: "",
        age: "",
        username: "",
        password: "",
        repeatPassword: ""
    });
    const isValidEmail = (email: string) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        lastName: "",
        age: "",
        username: "",
        password: "",
        repeatPassword: ""
    });

    const handleCancel = () => {
        setFormData({
            email: "",
            name: "",
            lastName: "",
            age: "",
            username: "",
            password: "",
            repeatPassword: ""
        });
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let error = "";


        switch (name) {
            case "username":
                error = value.includes(" ") ? "El nombre de usuario no puede contener espacios" : "";
                break;
            case "name":
                error = value.includes(" ") ? "El nombre no puede contener espacios" : "";
                break;
            case "age":
                const ageValue = parseInt(value);
                error = isNaN(ageValue) || ageValue < 8 || ageValue > 130 ? "La edad debe estar entre 8 y 130" : "";
                break;
            case "password":
                error = value.length < 5 ? "La contraseña debe tener al menos 5 caracteres" : "";
                break;
            case "repeatPassword":
                error = formData.password !== value ? "Las contraseñas no coinciden" : "";
                break;
            case "email":
                error = isValidEmail(value) ? "" : "El correo electrónico no es válido";
                break;
            default:
                break;
        }

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: error
        }));

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormSubmitted(true);

        if (Object.values(errors).some(error => error !== "")) {
            return;
        }
        const response = await apiService.update(`/api/usuarios/${auth.user.id}/`,{
            username: formData.username,
            password: formData.password,
            email: formData.email,
            nombre: formData.name,
            apellido: formData.lastName,
            edad: formData.age
        });
        if(response){
            AlertExito({message:'Informacion actualizada'});
            setFormData({
                email: "",
                name: "",
                lastName: "",
                age: "",
                username: "",
                password: "",
                repeatPassword: ""
            });
        }
    };

    return (
        <div className="contenedor__edit-perfil">
            <form className="CreateAccount-container__form" onSubmit={handleSubmit}>
                <div className="CreateAccount-container__form-columns">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        className="CreateAccount-container__form-input"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Apellido"
                        className="CreateAccount-container__form-input"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                {errors.name && <p className="error-message">{errors.name}</p>}
                <input
                    type="number"
                    name="age"
                    placeholder="Edad"
                    className="CreateAccount-container__form-input"
                    value={formData.age}
                    onChange={handleChange}
                    min={"8"}
                    max={"130"}
                    required
                />
                {errors.age && <p className="error-message">{errors.age}</p>}
                <input
                    type="text"
                    name="username"
                    placeholder="Nombre de usuario"
                    className="CreateAccount-container__form-input"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                {errors.username && <p className="error-message">{errors.username}</p>}
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    className="CreateAccount-container__form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
                <div className="CreateAccount-container__form-columns">
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        className="CreateAccount-container__form-input"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="repeatPassword"
                        placeholder="Repetir contraseña"
                        className="CreateAccount-container__form-input"
                        value={formData.repeatPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                {errors.repeatPassword && <p className="error-message">{errors.repeatPassword}</p>}
                {errors.password && <p className="error-message">{errors.password}</p>}
                <div className="button__flex">
                    <button className="CreateAccount-container__form-buttom button__cancelar" onClick={handleCancel}>
                        Cancelar
                    </button>
                    <button type="submit" className="CreateAccount-container__form-buttom button__guardar">
                        Guardar Cambios
                    </button>
                </div>
                {formSubmitted && Object.values(errors).some(error => error !== "") && (
                    <p className="warning-message">Por favor, complete todos los campos correctamente.</p>
                )}
            </form>
        </div>
    )
}

export default EditarPerfil;
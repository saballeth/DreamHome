import Inicio from "@/components/Inicio/Inicio"
import Header from '@/components/Header/Header';
const Login: React.FC = () =>{
  
    return (
        <>

            <div className="background-container">
                <div className="blue-overlay"></div> {/* Capa de fondo azul */}
                <div className="content">
                    <Header logged={false}/>
                    <Inicio/>
                </div>    
            </div>
        </>
    )
}
export default Login
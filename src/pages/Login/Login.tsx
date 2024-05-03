import Inicio from "@/components/Inicio/Inicio"
import Header from '@/components/Header/Header';
const Login: React.FC = () =>{
  
    return (
        <>
            <Header logged={false}/>
            <Inicio/>
        </>
    )
}
export default Login
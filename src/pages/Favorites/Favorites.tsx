import  Favorite  from '@/components/Favorites/Favorites';
import  Footer  from '@/components/Footer/Footer';
import Header from '@/components/Principal/Principal_Header/PrincipalHeader';

const Favorites: React.FC = () =>{
  
    return (
        <>
            <Header colorNameLogo={true} colorUbi={true}/>
            <Favorite/>  
            <Footer/>  
        </>
    )
}
export default Favorites
import AboutUs from '@/components/AboutUs/AboutUs';
import Header from '@/components/Header/Header';
const About: React.FC = () =>{
  
    return (
        <>
                <div className="content">
                    <Header logged={false}/>
                    <AboutUs/>
                </div>    

        </>
    )
}
export default About
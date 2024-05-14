import AboutUs from '@/components/AboutUs/AboutUs';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

const About: React.FC = () =>{
  
    return (
        <>
                <div className="content">
                    <Header logged={false}/>
                    <AboutUs/>
                    <Footer styleC={true}/>
                </div>    

        </>
    )
}
export default About
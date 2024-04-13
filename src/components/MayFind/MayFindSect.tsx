import Products from '../../data/Products.json'
import './MayFind.styles.css';
import MayFindCard from './MayFindCard/MayFindCard';

const MayFindSect: React.FC = () =>{
  return (
    <div className='mayfind-container'>
        <div>
          <h2 style={{textAlign:"center", marginBottom:"20px", fontSize:"58px"}}>En nuestro sitio encontrarás...</h2>
            <div className="mayfind-container-content">
                {Products.map((getProduct, index)=>(
                    <MayFindCard products={getProduct} key={index}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MayFindSect
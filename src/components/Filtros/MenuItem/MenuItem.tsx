import { useState } from 'react';
import './MenuItem.css'

const MenuItem = ({texto,onClick}: {texto: string, onClick: any}) => {
    const [isSelect, setSelect] = useState(false);

    const handleSelect = () =>{
        setSelect(isSelect===true ? false:true);
        onClick(texto);
    }
    
    return (
        <div className={`item__container ${isSelect ? 'select':''}`} onClick={handleSelect}>
            <h4 className="item__texto">{texto}</h4>
        </div>
    )
}

export default MenuItem;
import './MenuItem.css'

const MenuItem = ({texto}: {texto: string}) => {

    return (
        <div className="item__container">
            <h4 className="item__texto">{texto}</h4>
        </div>
    )
}

export default MenuItem;
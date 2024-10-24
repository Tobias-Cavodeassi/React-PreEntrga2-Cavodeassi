import "./ItemDetail.css"

const ItemDetail = ({ product }) => {
    return (
        <div className="product_detail">
            <img src={product.image} width={500} alt=""/>
            <div>
                <h2 className="item_detail_text">{product.model}</h2>
                <p className="item_detail_text">Precio: ${product.price}</p>
                <p className="item_detail_text">{product.description}</p>
            </div>
        </div>
    )
}

export default ItemDetail
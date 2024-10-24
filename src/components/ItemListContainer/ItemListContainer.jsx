import { useState, useEffect } from "react"
import ItemList from "./ItemList.jsx"
import { getProducts } from "../../data/data.js"
import { useParams } from "react-router-dom"
import "./itemlistcontainer.scss"

const ItemListContainer = ({ catalogo }) => {
    const [products, setProducts] = useState([])
    const { idCategory } = useParams()

    useEffect(()=> {
        getProducts()
            .then((dataProducts) => {
                if(idCategory){
                    const filterProducts = dataProducts.filter( (product)=> product.category === idCategory )
                    setProducts(filterProducts)
                }else{
                    setProducts(dataProducts)
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                console.log("finalizo la promesa")
            })
    }, [idCategory])

    return (
        <div>
            {catalogo}
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Product } from "../Types/prodType";
import { AppDispatch } from "../store/myStore";
import { setSelectedProduct } from "../slices/mySlice";

const ProductList: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([])
    
    const dispatch = useDispatch<AppDispatch>()


    useEffect( ()=> {
        const fetchProducts =  async () => {
            const response = await axios.get<Product[]>("https://fakestoreapi.com/products")
            console.log(response.data)
            setProducts(response.data)

        }
        fetchProducts()
    
    }, [])

    const handleProductClick = (product : Product) => {
        console.log("Product clicked")
        dispatch(setSelectedProduct(product))
        console.log(product)
    }

    
    return(
        <div>
            <h1> Hey my pRODUCT</h1>

            {products.map((prod)=> (
                <ul>
                    <li key={prod.id}  onClick={()=> handleProductClick(prod)} >
                    <h2>{prod.title}</h2>
                    <p>{prod.price}</p>
                </li>

                </ul>
                
            ))}
        </div>
    )

}

export default ProductList

//ProductList

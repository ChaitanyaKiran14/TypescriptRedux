import { useSelector } from "react-redux";
import { RootState } from "../store/myStore";

const SpecificProduct : React.FC  = () => {

    const product = useSelector((state: RootState) => state.product.selectedProduct)



    return (

        <div>

            <h1> Showing selected product</h1>
            <p>Product Name: {product.name}</p>
            <p>Product Price: {product.price}</p>
        </div>
    )

}


export default SpecificProduct
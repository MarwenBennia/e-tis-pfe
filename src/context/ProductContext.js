import {  createContext,useState } from "react";

export const Context = createContext({ value: undefined, loadValue: () => console.log('Default function') })
const ProductContext = ({children})=>{
    const [product, setProduct] = useState(undefined)
    return (
        <Context.Provider
        value={{value:product,setValue:(currentValue)=>setProduct(currentValue)}}>
            {children}
        </Context.Provider>
    )
    
}
export default ProductContext

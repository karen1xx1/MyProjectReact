import React from 'react'
import { createContext, useState } from 'react'

const ProductsContext = createContext([])

export const ProdutsProvider = ({children}) => {
    const [productsInBasket, setProductsInBasket] = useState([])
    const [productsInBasketPrice, setProductsInBasketPrice] = useState([])
    const [dublicateProd, setDublicateProd] = useState([])
    const [quantity, setQuantity] = useState([])

    function addProduct(newProduct){
        const dublicate = productsInBasket.find(elem => elem.id == newProduct.id)
        if(dublicate == undefined) {
            setProductsInBasket([...productsInBasket, newProduct])
            setQuantity([...quantity, 1])
            setProductsInBasketPrice([...productsInBasketPrice, +newProduct.price])
        } else {
            productsInBasket.findIndex((elem, indx) => {
                if(elem.id == dublicate.id){
                    quantity[indx] = quantity[indx] + 1
                    productsInBasketPrice[indx] = +dublicate.price * quantity[indx]
                }
            })
            setDublicateProd([...dublicateProd, dublicate])
        }
    }

    return <ProductsContext.Provider value={{productsInBasket, setProductsInBasket, addProduct, dublicateProd, productsInBasketPrice, quantity, setQuantity}}>
        {children}
    </ProductsContext.Provider>
}

export default ProductsContext
import React from 'react'
import "./basket.style.scss"
import { useContext } from 'react'
import ProductsContext from '../../ctx/ProductsBasketCTX'
let totalPrice = 0


 
const BasketBox = ({basketWnd, setBasketWnd}) => {

  const {productsInBasket, setProductsInBasket, productsInBasketPrice, quantity} = useContext(ProductsContext)

  function handleDelete(e){
    const delProd = productsInBasket.filter(elem => elem.id != e.target.id)
    const delProdIndex = productsInBasket.findIndex((elem, indx) => elem.id == e.target.id)
    quantity.splice(delProdIndex, 1)
    productsInBasketPrice.splice(delProdIndex, 1)
    setProductsInBasket(delProd)
  }

   function renderProdsBasket(){
    const prodsRend = []
    totalPrice = productsInBasketPrice.reduce((acc, elem) => {
        return acc + elem
    }, 0)
    for(let i = 0; i < productsInBasket.length; i++){
      prodsRend.push(
        <li key={productsInBasket[i].id}>

          <div className='basket-image-div'>
            <img src={productsInBasket[i].image} alt="" />
          </div>

          <div className='basket-name-div'>
          {productsInBasket[i].name}
          </div>

          <span className='produce-price-basket'>{productsInBasketPrice[i]}$</span>

          <span className='produce-quantity-basket'>{quantity[i]}</span>

          <span onClick={handleDelete} className='produce-delete-basket' id={productsInBasket[i].id}>X</span>

          </li>
      )
    }
    return prodsRend
   }



  return <section style={{
    transform: "translateX(" + basketWnd + "%)"}} className='basket-box'>
      <span className='basket-close' onClick={() => setBasketWnd("100")}>X</span>
          <div className='total-price'>Total Price: {totalPrice}</div>
      <ul>
          {renderProdsBasket()}
      </ul>
  </section>
}

export default BasketBox
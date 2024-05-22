import React, { useState, useRef } from 'react'
import prods from '../../assets/products.js'
import SingleProduct from './SingleProduct.jsx'
import { SlBasket } from "react-icons/sl";
import "./store.style.scss"
import BasketBox from './Basket/BasketBox.jsx';
import { useContext } from 'react';
import ProductsContext from '../ctx/ProductsBasketCTX.jsx';
import UserContext from '../ctx/UserCTX.jsx';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

const allprods = prods.TV.concat(prods.Phone)


const StorePage = () => {

  const [category, setCategory] = useState(prods.TV)
  const [basketWnd, setBasketWnd] = useState("100")
  const {productsInBasket, addProduct} = useContext(ProductsContext)
  const {userStatus} = useContext(UserContext)
  const [portalStatus, setPortalStatus] = useState(false)

  function handleCheck(e){
    if(userStatus){
      const findProductForBasket = allprods.find(elem => elem.id == e.target.id)
      addProduct(findProductForBasket)
    } else setPortalStatus(true)
  }


  function categoryChoose(e){
       switch(e.target.className){
         case "tv":
          setCategory(undefined)
          setTimeout(() => {
            const randomProds = prods.TV.sort(()=>Math.random() - 0.5)
            setCategory(randomProds)
          }, 500);
         break
         case "phone":
          setCategory(undefined)
          setTimeout(() => {
            const randomProds = prods.Phone.sort(()=>Math.random() - 0.5)
            setCategory(randomProds)
          }, 500);
        break
       }
  }
  return <main className='store-page'>
    <BasketBox basketWnd={basketWnd} setBasketWnd={setBasketWnd}/>
    <div className='basket-avatar'>
    <SlBasket onClick={()=> setBasketWnd("0")}>
    </SlBasket>
      <span className='basket-prods-counter'>{productsInBasket.length}</span>
    </div>
    <menu className='electronic-menu'>
      <ul>
        <li onClick={categoryChoose} className='tv'>TV</li>
        <li onClick={categoryChoose} className='phone'>Phone</li>
      </ul>
    </menu>

    <section className='products-section'>

    {portalStatus && createPortal(<div className='log-text'>Please register a user!!
    <Link to="/reg">Registration</Link>
    </div>, document.body)}

    {category ? category.map(elem => <SingleProduct fnCheck={handleCheck} key={elem.id + 1000} prodsInfo={elem}/>) : <span className="loader"></span>}

    </section>

  </main>
}

export default StorePage
import React from 'react'
import { useState } from 'react'


const SingleProduct = ({prodsInfo, fnCheck}) => {


  return <div className='single-product' >
    <h2>{prodsInfo.name}</h2>
    <div>
    <img src={prodsInfo.image} alt="" />
    </div>
    <hr />
    <p>{prodsInfo.description}</p>
    <span>{prodsInfo.price}$</span>
    <button onClick={fnCheck} id={prodsInfo.id}>To Basket</button>
  </div>
}

export default SingleProduct
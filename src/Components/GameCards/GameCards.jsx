import React, { useEffect, useState } from 'react'
import "./game-cards.style.scss"
import Images from './Images.jsx'

const GameCards = () => {

    const [limitState, setLimitState] = useState("art-passive")

    useEffect(()=>{
      setTimeout(()=>{
        setLimitState("art-active")
      }, 2500)
    }, [])
   

   
  return <section>
    <article className={limitState}>
        <Images />
    </article>
  </section>
}

export default GameCards
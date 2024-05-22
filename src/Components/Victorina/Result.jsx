import React from 'react'
import "./result.style.scss"

const Result = ({resTrue, resFalse}) => {
  return (
    <div className='boxRez'>
        <h2>Your Result of the test</h2>
        <hr />
        <p>Score:</p>
        <span>True {resTrue}</span>
        <span>False {resFalse}</span>
    </div>
  )
}

export default Result
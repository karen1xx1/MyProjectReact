import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import "./xo.style.scss"

const combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

let combsX = []
let combsO = []


const XOGame = () => {

    const [typer, setTyper] = useState(true)
    const [gameDivs, setGameDivs] = useState(Array(9).fill(""))
    const [winner, setWinner] = useState(null)
    const [combsXe, setCombsXe] = useState([])

    function handleClick(e){
      const copyDivs = gameDivs
        const finderIndex = gameDivs.findIndex((_, indx) => indx == e.target.id)
        if(typer == true){
          copyDivs[finderIndex] = "X"
          setGameDivs([...gameDivs], copyDivs)
          setTyper(false)
          combsX.push(finderIndex)
          setCombsXe([...combsXe, finderIndex])
          
          if(combsX.length >= 3){
            console.log(combsXe);
            for(let i = 0; i < combinations.length; i++){
              if(combinations[i].every(num => combsX.includes(num))){
                setWinner("X win")
              } 
            }
          }

        } else {
          copyDivs[finderIndex] = "O"
          setGameDivs([...gameDivs], copyDivs)
          setTyper(true)
          combsO.push(finderIndex)
          if(combsO.length >= 3){
            for(let i = 0; i < combinations.length; i++){
              if(combinations[i].every(num => combsO.includes(num))){
                setWinner("O win")
              } 
            }
          }
        }
      }

      useEffect(()=>{
        if(gameDivs.every(num => num != "") && winner == null){
          setWinner("No one won")
        }
      }, [typer])

      function handleClear(){
        setTyper(true)
        setGameDivs(Array(9).fill(""))
        setWinner(null)
        combsX = []
        combsO = []
      }

      function handleWin(e){
        console.log(e.target);
      }



  return <>
  <section className='X-O-game'>
     {gameDivs.map((elem, indx) => <div id={indx} key={indx + 300} onClick={handleClick} className={elem == "" && winner == null ? "" : "selected-slot"}>{elem}</div>)}
     {winner && createPortal(<div className='portalWinner' onClick={handleWin}>{winner}
     <span onClick={handleClear}>X</span>
     </div>, document.body)}
  </section>
  
  </>
}

export default XOGame
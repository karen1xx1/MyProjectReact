import { useState } from "react";
import "./calc.style.scss"
let x = []

const Calc = () => {

    const [firstNum, setFirstNum] = useState([])
    const [result, setResult] = useState([])
    const [types, setTypes] = useState(null)
    const [activeButton, setActiveButton] = useState(null)
    const [bull , setBull] = useState(false)


    function boo(e){
      if(!bull){
        setResult([...result, +e.target.value].join(""))
        x = []
      } else {
        setResult([])
        x.push(+e.target.value)
        console.log(result);
        setResult(x)
        setBull(false)
      }
    } 

    console.log(result);

    
    function handleCalc(e){
      switch(e.target.value){
          case "+":
          setFirstNum(result)
          setResult("")
          setTypes("plus")
          setActiveButton(1)
          break 
          case "-":
            setFirstNum(result)
          setResult("")
          setTypes("minus")
          setActiveButton(2)
          break
          case "X":
            setFirstNum(result)
          setResult("")
          setTypes("multiply")
          setActiveButton(3)
          break
          case "/":
            setFirstNum(result)
          setResult("")
          setTypes("divide")
          setActiveButton(4)
        break
      }
    }
    
    
    function handleResult(){
      let secondNum = result
      setActiveButton(null)
      setBull(true)
      switch(types) {
        case "plus":
          setResult(+firstNum + +secondNum)
        break
        case "minus":
          setResult(+firstNum - +secondNum)
          break
        case "multiply":
          setResult(+firstNum * +secondNum)
          break
        case "divide":
          setResult(+firstNum / +secondNum)
          break
      }
    }
    
    return <section className="calc">
    <div className="result-num">{result}</div>
    <article>
    <button value="7" onClick={boo}>7</button>
    <button value="8" onClick={boo}>8</button>
    <button value="9" onClick={boo}>9</button>
    <button value="+" className={activeButton == 1 ? "active-status" : ""} onClick={handleCalc}>+</button>
    <button value="4" onClick={boo}>4</button>
    <button value="5" onClick={boo}>5</button>
    <button value="6" onClick={boo}>6</button>
    <button value="-" className={activeButton == 2 ? "active-status" : ""} onClick={handleCalc}>-</button>
    <button value="1" onClick={boo}>1</button>
    <button value="2" onClick={boo}>2</button>
    <button value="3" onClick={boo}>3</button>
    <button value="X" className={activeButton == 3 ? "active-status" : ""} onClick={handleCalc}>X</button>
    <button value="C" onClick={() => setResult("")}>C</button>
    <button value="0" onClick={boo}>0</button>
    <button value="=" onClick={handleResult}>=</button>
    <button value="/" className={activeButton == 4 ? "active-status" : ""} onClick={handleCalc}>/</button>
    </article>
  </section>
}

export default Calc
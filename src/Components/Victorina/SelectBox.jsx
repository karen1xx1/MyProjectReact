import React from 'react'
import data from '../../assets/todo.js'
import SelectTodo from './SelectTodo.jsx'
import Result from './Result.jsx'
import "./selectbox.style.scss"
import { useState, Fragment } from 'react'
import {createPortal} from 'react-dom'


const SelectBox = () => {
    const [vic, setVic] = useState(1)
    const [state, setState] = useState(null)
    const [stateCurrect, setStateCurrect] = useState(null)
    const [finish, setFinish] = useState(false)
    const [test, setTest] = useState(true)
    const [res1, setRes1] = useState(0)
    const [res2, setRes2] = useState(0)


    const found = data.find(obj => {
        return obj.id == vic
    })

    function handleCheck(e){
        document.getElementById('f').className = 'selected-vic-over'
        setState(e.target)
        
        if(+e.target.id == found.currentType){
            e.target.style.backgroundColor = 'green'
            setRes1(res1 + 1)
        } else {
            console.log(e.target);
            setRes2(res2 + 1)
            e.target.style.backgroundColor = 'red' 
            const typeCurrect = document.getElementById(found.currentType)
            typeCurrect.style.backgroundColor = 'green'
            setStateCurrect(typeCurrect)
        }
    }
    
    function handleNext(){
        document.getElementById('f').className = 'selected-vic'
        setVic(vic + 1)
        if(stateCurrect != null){
            stateCurrect.style.backgroundColor = ''
        }
        if(state != null){
            state.style.backgroundColor = ''
        }
        
        if(found.id == data.length ){
            setFinish(true)
            setTest(false)
        }
    }

  return <section>
    {test && <SelectTodo fnChek={handleCheck} {...found}/>}
    {finish && createPortal(<Result resTrue={res1} resFalse={res2}/>, document.body)}
    {test && <button onClick={handleNext} className='next-text'>Next</button>}
  </section>
}

export default SelectBox
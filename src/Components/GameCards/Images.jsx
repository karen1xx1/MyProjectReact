import React, { useEffect } from 'react'
import diamond5 from "../../../public/cards/qyap5.png"
import diamond7 from "../../../public/cards/qyap7.png"
import diamond9 from "../../../public/cards/qyap9.png"
import diamond10 from "../../../public/cards/qyap10.png"
import heart8 from "../../../public/cards/sirt8.png"
import heart9 from "../../../public/cards/sirt9.png"
import heart10 from "../../../public/cards/sirt10.png"
import tuz from "../../../public/cards/tuz-qyap.png"

import { useState} from 'react'



const imagesData = [
    {
        id: 1,
        url: diamond5
    },
    {
        id: 2,
        url: diamond7
    },
    {
        id: 3,
        url: diamond9
    },
    {
        id: 4,
        url: diamond10
    },
    {
        id: 5,
        url: heart8
    },
    {
        id: 6,
        url: heart9
    },
    {
        id: 7,
        url: heart10
    },
    {
        id: 8,
        url: tuz
    },
]


const numArr = []
for(let i = 0; i <= 7; i++){
   numArr.push(i, i)
}
numArr.sort(()=> Math.random() - 0.5)



const Images = ({handleOpen}) => {

    const [currentImageFirst, setCurrentImageFirst] = useState(null)
    const [currentImageSecond, setCurrentImageSecond] = useState(null)
    const [clicks, setClicks] = useState(1)
    const [limit, setLimit] = useState(true)
    const [check, setCheck] = useState("activeCards")


    useEffect(()=>{
        setTimeout(()=>{
            setCheck("not-activeCards")
        }, 2500)
    }, [])

    function handleOpen(e){
        setCurrentImageFirst(e.target.children[0])
        if(limit){
            setClicks(clicks + 1)
            setCurrentImageSecond(e.target)
            if(clicks == 2){
                const openCardSecond = e.target.children[0]

                if(currentImageFirst.alt != openCardSecond.alt){

                    if(currentImageFirst.src != openCardSecond.src){
                        setTimeout(()=>{
                            currentImageFirst.className = "not-activeCards"
                            openCardSecond.className = "not-activeCards"
                        }, 2000)
                    }
                    if(currentImageFirst.src == openCardSecond.src){
                        console.log(currentImageSecond);
                        currentImageSecond.id = 'selected-cards'
                        e.target.id = "selected-cards"
                        setCurrentImageSecond(null)
                    }
                    setClicks(1)
                    setLimit(false)
                    setTimeout(()=>{
                       setLimit(true)
                    }, 1500)
                } else setClicks(1)
            }
            e.target.children[0].className = "activeCards"
        }
    }

    function renderImages(){
        const currentImages = []
        for(let i = 0; i < 16; i++){
        currentImages.push(<div className='' onClick={handleOpen} key={i} data-id={i}>
            <img className={check} src={imagesData[numArr[i]].url} alt={i} />
        </div>)
        }
        return currentImages
    }


    

    
  return <>
     {renderImages()}
  </>
}

export default Images
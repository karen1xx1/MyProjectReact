import React, {createContext, useState} from "react"
import "./app.style.scss"
import PageLog from "./Components/Registration/PageLog.jsx"
import { Route, Routes  } from "react-router-dom"
import RootLayout from "./Components/layout/RootLayout.jsx"
import StorePage from "./Components/StoreElectronic/StorePage.jsx"
import GameCards from "./Components/GameCards/GameCards.jsx"
import SelectBox from "./Components/Victorina/SelectBox.jsx"
import Calc from "./Components/Calculator/Calc.jsx"
import XOGame from "./Components/XandO/XOGame.jsx"

const App = ()=>{
  return (
    <>
    <Routes>
      <Route path="/" element={<RootLayout/>}>
         <Route path="/" element={<StorePage/>}/>
         <Route path="/cards" element={<GameCards/>}/>
         <Route path="/calc" element={<Calc/>}/>
         <Route path="/XOgame" element={<XOGame/>}/>
         <Route path="/test" element={<SelectBox/>}/>
         <Route path="/reg" element={<PageLog/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App


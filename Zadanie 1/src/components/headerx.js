import React from 'react'
import '../pages/css.css'
import Functionx from '../components/functionsx'
import ReactDOM from 'react-dom'
import MenuBot from '../components/menu-bot'
import ContainerBot from '../components/container-bot'

const Headerx = () => (
  <div className="navi-buttons">
    <button className="button" onClick={Functionx}>Analyser</button>
    <button className="button" onClick={Bot}>Bot</button>
    <button className="button">Alerty</button>
    <button className="button">Ustawienia</button>
    <button className="button">Wyloguj</button>
  </div>
 
)

function Bot() {
  return (
    
      ReactDOM.render(<ContainerBot />, document.getElementById("container-item")),
      ReactDOM.render(<MenuBot />, document.getElementById("menu-item"))
    
  );
}


export default Headerx
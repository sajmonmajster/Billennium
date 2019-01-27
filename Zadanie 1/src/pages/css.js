import React from 'react'
import { Link } from 'gatsby'
import ReactDOM from 'react-dom';

import '../components/functionsx'
import Headerx from '../components/headerx'
import Footerx from '../components/footerx'
import MenuBot from '../components/menu-bot'
import './css.css'

const IndexPage = () => {
  const name = "adsfsd";

  return (
  
      <div className="grid-container">
        <div className="header">
          <Headerx />
        </div>
        <div id="menu-item" className="menu">Menux</div>
        <div id="container-item" className="container"></div>
        <div className="footer">footer
          <Footerx />
        </div>
      </div>
   
  )
}


export default IndexPage
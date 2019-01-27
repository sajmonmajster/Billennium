import React from 'react'
import '../pages/css.css'
import ReactDOM from 'react-dom'
import Headerx from '../components/headerx'


function Functionx() {
    return (
        ReactDOM.render(<Headerx />, document.getElementById("container-item"))
    );
  }

export default Functionx
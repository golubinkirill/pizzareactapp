import React, { useState } from "react"
import * as ReactDOM from "react-dom"
import styles from './messageAlert.classes.css'

const MessageAlert = ({msg}) =>{
    const [elem, setElem] = useState('');
    function ff(){
        setElem('none');
        console.log('fghjkl')
    }
    setTimeout(()=>{
        setElem('none')
    }, 5000)
    return(
<div className="alertAll">
<div className="alert" style={{display:elem}}>
  <span className="closebtn" onClick={ff}>&times;</span>
  {msg}
</div>
</div>
    )
}

export default MessageAlert;
import React, { useState } from "react"
import styles from './Mainpage.classes.css'
import image from './blockback.jpg'
import Cart from './Cart'
import Cards from "./Cards"
import MessageAlert from "./MessageAlert"

const Mainpage = () =>{
    return(
        <div>
            <div className="block">
                <div className="textCenterBlock">
                    <h1>BEST PIZZERIA IN SAN-FRANCISCO</h1>
                    <hr></hr>
                    <h2>Freaddy Fasbear Pizza`s</h2>
                    <h3>since 1488</h3>
                </div>
            </div>
        <Cards/>
        </div>
    )
}

export default Mainpage;
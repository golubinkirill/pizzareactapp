import React, { useState } from "react"
import styles from './Uheader.classes.css'
import image from './iconf.png'
import { useMediaQuery } from 'react-responsive'

const Uheader = ({user}) =>{
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    let lt = 'lt';
    let ltMobile = 'ltMobile'
    if(isTabletOrMobile){
        console.log('lol')
    }
    return(
        <div className={isTabletOrMobile?ltMobile:lt}>
            <div>
                <h1>Freaddy Fazbear Pizza</h1>                
            </div>
            <div className={isTabletOrMobile?'navMobile':'navmenu'}>
                <a href="/">Order</a>
                 <a href="/contacts">Contacts</a>
                 <a href="/card">Card</a>
            </div>
            <a href="/cart"><img src={image} width="30px" height="30px" /></a>
        </div>
    )
}

export default Uheader;
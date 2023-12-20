import React, { useState } from "react"
import style from './Cart.classes.css'
import pizzasData from './actualRange.json'
import CartTable from "./CartTable";

const Cart = () =>{

    const pizzasArray = Object.values(pizzasData.range);
    const localStorageObject  = JSON.parse(localStorage.getItem('products'));
    let i=0;

    let tableComponents = [];

for(let x = 0; x < localStorageObject.products.length; x++){
    for(let i = 0; i < pizzasArray.length; i++){
        if(localStorageObject.products[x]==pizzasArray[i].name){
            tableComponents.push(<CartTable key={x} productArray={pizzasArray[i]} />);
        }
    }
}

    return(
        <div className="mainBlock">
            <div className="Order">
                <div className="llts">
                    <div className="fgt">
                        {tableComponents}
                    </div>
                </div>
            </div>

            <div class="small-panel">
                <h2>Your Order:</h2>
                <input type="text" id="name" placeholder="Name"/>
                <input type="text" id="number" placeholder="Number"/>
                <input type="text" id="number" placeholder="Street"/>
                    <input type="text" id="number" placeholder="Home/Apt"/>
                <input type="text" id="number" placeholder="Extras for your order"/>
                <p className="Disclaimer">The average delivery time is 1 hour, no more than 2 hours. If your pizza is late or you need assistance, call +1 904 50 42 21.</p>
                <button>Pay</button>
            </div>

        </div>
    )
}

export default Cart;
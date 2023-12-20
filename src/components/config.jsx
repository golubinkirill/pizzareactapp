import React, { useState, useEffect } from "react"
import style from "./Cards.classes.css"
import pizzasData from './actualRange.json'
import image from './images/marinara.jpg'
import newButton from "../components/newButton"
import MessageAlert from './MessageAlert'
import Mainpage from "./Mainpage"

const Cards = ({pizzaRange, cartInfo}) =>{

    const [message, showMessage] = useState(false);
    let buttonText = '';

    const pizzasArray = Object.values(pizzasData.range);
    let productList = { products: [] };

    try {
        const localStorageObject  = JSON.parse(localStorage.getItem('products'));
        productList.products=localStorageObject.products;
    } catch (error) {
        console.log(error)
    }


    let l = '';

    function OnButtonCard(product, index){
        productList.products.push(product)
        localStorage.setItem('products', JSON.stringify(productList));
        localStorage.setItem(product, JSON.stringify(index))
        showMessage(true);
        GetOnner();
    }
    const GetOnner=()=>{
        setTimeout(()=>{showMessage(false)},3000)
    }

    return (
        <div className="ltp">
            <hr></hr>
            <h1>Our Menu</h1>
      <div className="ltr">
        {pizzasArray.map((pizza, index) => (
          <div className='card' key={index}>
            <h2>{pizza.name}</h2>
            <p>Price: {pizza.price}</p>
            <p>Diameter: {pizza.diameter}</p>
            <hr></hr>
            <img width='300' height='280' src={pizza.linkImg} alt={pizza.type} />
            <hr></hr>
            <button className="cardbtn" onClick={()=>OnButtonCard(pizza.name, index)}>ADD TO CARD</button>
            <button className="cardbtn" src='/cart'>ABOUT</button>
          </div>
        ))}
      </div>
      {message? <MessageAlert msg={'Added to cart'}/>:<p></p>}
      </div>
    );
}

export default Cards;
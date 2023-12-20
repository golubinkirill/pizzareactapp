import React from 'react';
import styles from './CartTable.classes.css';

const CartTable = ({ productArray }) => {

    const products = JSON.parse(localStorage.getItem('products'));

    const ff = (name) =>{
        const indexes = JSON.parse(localStorage.getItem(name));
        console.log(products.products[indexes]+' Удален из Корзины')
        let tempSTR = 'products.products['+indexes+']';
        console.log(tempSTR)

        localStorage.removeItem(tempSTR);
    }

  return (
    <div className='maincl'>
      <table border='1'>
        <tbody>
          <tr>
            <td>{productArray.name}</td>
          </tr>
          <tr>
            <td>Price:{productArray.price} $</td>
          </tr>
          <tr>
            <td>Diameter:{productArray.diameter}</td>
          </tr>
          <tr>
            <td><img src={productArray.linkImg} alt={productArray.name} width="180" height="180" /></td>
          </tr>
          <tr>
          <button onClick={()=>ff(productArray.name)}>Delete</button>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
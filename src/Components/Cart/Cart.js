import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.amount);
    const totalPrice = props.price.reduce((sum,price) => sum + price, 0);
    // let totalAmount = 0;
    // for (let i = 0; i < props.amount.length; i++) {
    //     const element = props.amount[i];
    //     totalAmount = totalAmount + element;
    // }
    return (
        <div className="cart">
            <h1>History</h1>
            <p>Total Course: {props.total}</p>
            <p>Enrolled Course: {props.selectedCourse} </p>
            <p>Total Amount: {totalPrice}</p>
        </div>
    );
};

export default Cart;
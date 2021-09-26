import React from 'react';
import './Cart.css';//declare Cart.css file
// Cart component
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let name=[];
    
    for(const employee of cart) {
        // calculate total salary and show emloyee name
        total = total + employee.salary;
        console.log(total);
        name= name + employee.name;

    }
    return (
        // show cart info
        <div className="cart-info">
              <h3>EMPLOYEE SUMMARY</h3>
               <h5>ADD EMPLOYEE: {props.cart.length}</h5>
               <h5>TOTAL COST : $ {total}</h5>
               <h3 className="name"> {name} </h3>
               
               
               
               
        </div>
    );
};

export default Cart;
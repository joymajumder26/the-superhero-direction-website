import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Emlpoyee.css';

const Employee = (props) => {
    const {img,name,Expert,Experience,Rating,salary,address}=props.employee;
    const element=<FontAwesomeIcon icon={faShoppingCart} />
    
    return (
        
// show all employee information
           <div className="employee">
           <img src={img} alt="" />
            <h3><span>Name: </span>{name}</h3>
            <p><span>Expert In: </span>{Expert}</p>
            <p><span>Experience: </span>{Experience}</p>
            <p><span>Rating: </span>{Rating}</p>
            <p><span>Salary: </span>{salary}</p>
            <p><span>Address: </span>{address}</p>
            <button onClick={()=>props.handleAddToCart(props.employee) } className="btn-regular" >{element} Add to Cart</button>
            
            
           </div>

            
       
    );
};

export default Employee;
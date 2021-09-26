import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Employee from '../Employee/Employee';
import './Company.css';
// Comany component
const Company = () => {
    const [employees,setEmpolyee]=useState([]);
    const [cart,setCart]=useState([]);
    // fetch data
    useEffect(()=>{ 
        fetch('./bdtask.json')
        .then(res=>res.json())
        .then(data=>setEmpolyee(data))
        
    },[])
    // handle add to cart button
    const handleAddToCart=(employee)=>{
        const newCart=[...cart,employee];
        setCart(newCart);
    }

    return (
   <div className="company">
            <div className="employee-container">
            {
                
                    employees.map(employee=><Employee
                     key={employee.id}
                     employee={employee}
                     handleAddToCart={handleAddToCart}       
                     >
                     </Employee>)
                
            }
        </div>
        <div className="cart-container">
            <Cart cart={cart}></Cart>
    </div>
   </div>
    );
};

export default Company;
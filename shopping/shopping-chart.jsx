/* eslint-disable jsx-a11y/anchor-is-valid */

import Payment from './payment'
import './styles.scss'
import { useState ,useEffect } from 'react'
import { items } from './items'
const ShoppingChart = () => {
    
    
    const[itemes , setItems] = useState({...items});
    const[price , setPrice] = useState(0);
 
    useEffect(()=>{
        let x =0
        for(let i of items){
            x = x + i.price
        } 
        setPrice(x)
    },[itemes])
    
    const add = (item ) =>{
        setPrice(price + item.price)
        item.quantity = item.quantity +1
    }
    const minus = (item ) =>{
        setPrice(price - item.price)
       item.quantity = item.quantity -1

    }
    const handleRemove = (item) => {
        const newPeople = itemes.filter((person) => person !== item);
        console.log(newPeople)
        setItems( newPeople);
      };

console.log(price )
 return (
        <div>
            <h1 className ="chart-shopping" >Shopping Cart</h1>

            <div className="shopping-cart">

                <div className="column-labels">
                    <label className="product-image">Image</label>
                    <label className="product-details"></label>
                    <label className="product-color">color</label>
                    <label className="product-size">size</label>
                    <label className="product-quantity">Quantity</label>
                    <label className="product-price">Price</label>
                 
                </div>
                {items.map(item => (
                     <div className="product">
                    <div className="product-image">
                        <img src="https://s.cdpn.io/3/dingo-dog-bones.jpg" alt =""/>
                        
                    </div>
                    <div className="product-details">
                        <div className="product-title">
                            Dingo Dog Bones
                        </div>
                    </div>
                    <div className="product-color">
                            white
                    </div>
                    <div className="product-size">
                           XL
                    </div>
                    <div className="product-quantity">
                    <div className="number-input">
                        <i class="fas fa-minus" onClick = {()=>minus(item)}></i>
                        <input className="quantity" min="0" name="quantity" value={item.quantity} type ="text"/>
                        <i className="fas fa-plus" onClick = {()=>add(item)}></i>
                        </div>
                    </div>
                    <div className="product-price">
                        12.99
                    </div>
                   
                    <div className="product-removal">
                         <i class="fas fa-times" onClick = {()=> handleRemove(item)}></i>
                    </div>
                   
                </div>
               

                ))}
             

               <div className="row d-flex justify-content-around ">
                   <h2 className = "m-md-0"><i class="fas fa-long-arrow-alt-left"></i> Continue Shopping</h2>
                   <div class=" pseudo-search ">
                        <input type="text" placeholder="Search..." autofocus required/>
                        
                        <i class="fa fa-globe places"></i>
                        <button class="fa fa-search" type="submit"></button>
                    </div>
                   
                   <h1 className = "">Totol Cost : ${price}</h1>
                   <button className="btn btn-warning btn-lg ">Checkout</button>

               </div>

            </div>
            <Payment/>
        </div>
    )
}

export default ShoppingChart

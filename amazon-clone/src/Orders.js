import React, { useState, useEffect } from 'react'
import "./Orders.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";

import {Link} from "react-router-dom";


function Orders() {

    // const [{ basket, user }, dispatch] = useStateValue();
    // const [orders, setOrders] = useState([]);

    // useEffect(()=> {
    //     if(user){
    //     db
    //     .collection('users')
    //     .doc(user?.uid)
    //     .collection('orders')
    //     .orderBy('created','desc')
    //     .onSnapshot(snapshot => (
    //         setOrders(snapshot.docs.map(doc=>({
    //             id: doc.id,
    //             data:doc.data()
    //         })))
    //     ))
    //     }
    //     else{
    //         setOrders([])
    //     }
    // },[user])

    return (
        <div className='orders'>
            <div className='order_image'>
               <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg'/>
           </div>
           <h1>Thanks For Ordering</h1> 
           
           
           <Link to="/">
          
           
           <button className='orders_continue'>Continue Shopping</button>
           </Link>
           </div>
        
    )
}

export default Orders

import React from 'react'
// import { Link } from 'react-router-dom'
import Header from './Header'
import Cookies from 'universal-cookie'
import axios from 'axios';

export default class Bag extends React.Component {
    addtocart = (item)=>{
        let token = new Cookies()
        token = token.get('token');
        axios.post("http://localhost:4000/app/addtocart",{token,item});
        alert("added to cart succesfully")
    }
 
    render(){
    return (
        <div>
            <Header/>
             <ul className="it">{this.props.bags.map(bag=>(
                    <li key={bag._id}>
                        <div className="bag">
                           
                                <img src={bag.image} alt={bag.title} width = "150" height = "180"></img>
                                <p>{bag.title}</p>
                        
                            <div className="bag-price">
                                {bag.price}
                            </div>
                            <button className="button primary"  onClick={()=>{this.addtocart(bag)}}>ADD TO CART</button>
                        </div>
                    </li>


                ))}</ul>
            
        </div>
    )
    }
}

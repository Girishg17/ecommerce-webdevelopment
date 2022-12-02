import React from 'react'
// import { Link } from 'react-router-dom'
import Header from './Header'
import Cookies from 'universal-cookie'
import axios from 'axios';
import '../Styles/Items.css'

export default class Laptop extends React.Component {
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
             <ul className="it">{this.props.laptop.map(laptop=>(
                    <li key={laptop._id}>
                        <div className="laptop">
                           
                                <img src={laptop.image} alt={laptop.title} width = "150" height = "180"></img>
                                <p>{laptop.title}</p>
                        
                            <div className="laptop-price">
                                {laptop.price}
                            </div>
                            <button className="button primary"  onClick={()=>{this.addtocart(laptop)}}>ADD TO CART</button>
                        </div>
                    </li>


                ))}</ul>
            
        </div>
    )
    }
}

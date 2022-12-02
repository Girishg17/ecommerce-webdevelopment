import React from 'react'
// import { Link } from 'react-router-dom'
import Header from './Header'
import Cookies from 'universal-cookie'
import axios from 'axios';

export default class Fashion extends React.Component {
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
             <ul className="it">{this.props.fashion.map(fashion=>(
                    <li key={fashion._id}>
                        <div className="fashion">
                           
                                <img src={fashion.image} alt={fashion.title} width = "150" height = "180"></img>
                                <p>{fashion.title}</p>
                        
                            <div className="fashion-price">
                                {fashion.price}
                            </div>
                            <button className="button primary"  onClick={()=>{this.addtocart(fashion)}}>ADD TO CART</button>
                        </div>
                    </li>


                ))}</ul>
            
        </div>
    )
    }
}

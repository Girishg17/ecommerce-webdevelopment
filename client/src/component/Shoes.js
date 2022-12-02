import React from 'react'
// import { Link } from 'react-router-dom'
import Header from './Header'
import Cookies from 'universal-cookie'
import axios from 'axios';

export default class Shoes extends React.Component {
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
             <ul className="it">{this.props.shoes.map(shoes=>(
                    <li key={shoes._id}>
                        <div className="shoes">
                           
                                <img src={shoes.image} alt={shoes.title} width = "150" height = "180"></img>
                                <p>{shoes.title}</p>
                        
                            <div className="shoes-price">
                                {shoes.price}
                            </div>
                            <button className="button primary"  onClick={()=>{this.addtocart(shoes)}}>ADD TO CART</button>
                        </div>
                    </li>


                ))}</ul>
            
        </div>
    )
    }
}

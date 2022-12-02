
import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Cookies from 'universal-cookie'
import '../Styles/Items.css'
export default class  Mobiles extends React.Component {
    // constructor(){
    //     super();
    //     this.state={
    //         title:"",
    //         image:"",
    //         price:""
    //     }
    // }
    
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
             <ul className="it">{this.props.mobile.map(mobile=>(
                    <li key={mobile._id}>
                        <div className="mobile">
                            <Link to="#" className = "link">
                                <img src={mobile.image} alt={mobile.title} width = "150" height = "180"></img>
                                <p>{mobile.title}</p>
                            </Link>
                            <div className="mobile-price">
                                {mobile.price}
                            </div>
                            <button className="button primary" onClick={()=>{this.addtocart(mobile)}}>ADD TO CART</button>
                        </div>
                    </li>


                ))}</ul>
            
        </div>
    )
    }
}

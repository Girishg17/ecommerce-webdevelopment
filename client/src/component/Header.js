import React from 'react'
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useState } from 'react';
import {Redirect} from 'react-router-dom';
import '../Styles/Header.css'

const Logout = () => {
  
  const [tologin,setlogin] = useState(false)

  const logout = () => {
    const token = new Cookies()
    token.remove('token');
    setlogin(true);
  }
  return (
    <>
    {tologin ? <Redirect to = '/login' />:
    <button className="btn btn-danger" onClick = {logout}>Logout</button>
    } 
    </>
  )
}
export default function Header() {

    return(
      <div style = {{backgroundColor:"grey",margin:"0"}}>

        <ul className="ul">
  <div className="dr">
 
  <li >
    <Link className = "a" to='/home'>HOME </Link>
  </li>
 
  
</div>
<div>
  <li >
    <Link className = "a"  to="/">Cartitems</Link>
  </li>
<li >
  <Logout/>
  </li>
 </div> 
  
</ul>

  </div>  
    
    
    )
}

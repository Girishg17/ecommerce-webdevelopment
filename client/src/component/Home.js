import React from 'react'
import Header from "./Header"
import { Link } from 'react-router-dom'
import "../Styles/Home.css"
import img1 from '../images/phone1.jpg'
import img2 from '../images/lap1.jpg'
import img3 from '../images/shoes1.jpg'
import img4 from '../images/dress1.jpg'
import img5 from '../images/bag1.jpg'
export default function Home() {
    return (
        <div>
            <Header/>
            <div className = "parent">
            <div className = "flexContain">
                <Link to='/mobile' className="m" >
            <h1>MOBILES</h1>
            <img src ={img1} alt = "MOB" width = "150" height = "200" style = {{borderRadius:"5px"}}/>
            <p>you can shop mobiles here</p>
            </Link>
            </div>
            <div className = "flexContain">
            <Link to='/laptop'   className="m">
            <h1>LAPTOPS</h1>
            <img src ={img2} alt = "MOB" width = "150" height = "200" style = {{borderRadius:"5px"}}/>
            <p>you can shop mobiles here</p>
            </Link>
            </div>
            <div className = "flexContain">
            <Link to='/shoes' className="m">
            <h1>SHOES</h1>
            <img src ={img3} alt = "MOB" width = "150" height = "200" style = {{borderRadius:"5px"}}/>
            <p>you can shop mobiles here</p>
            </Link>
            </div>
            <div className = "flexContain">
            <Link to='/fashion' className="m">
            <h1>DRESS</h1>
            <img src ={img4} alt = "MOB" width = "150" height = "200" style = {{borderRadius:"5px"}}/>
            <p>you can shop mobiles here</p>
            </Link>
            </div>
            <div className = "flexContain">
            <Link to='/bags' className="m">
            <h1>BAGS</h1>
            <img src ={img5} alt = "MOB" width = "150" height = "200" style = {{borderRadius:"5px"}}/>
            <p>you can shop mobiles here</p>
            </Link>
            </div>
            </div>
        </div>
    )
}

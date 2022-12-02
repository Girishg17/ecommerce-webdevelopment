import { React, useEffect, useState } from "react";
// import Fashion from './Fashion'
// import { CartProvider } from 'react-use-cart'
import Header from "./Header";
// import Mobiles from './Mobiles';
import Cookies from "universal-cookie";
import axios from "axios";
import "./app1.css"

export default function CartItem(props) {
  const [firstrender, setfirstrender] = useState(true);
  const [showtotal, setShowtotal] = useState("dontshow");
  var total = 0;
  const [user, setUser] = useState("");
  useEffect(() => {
    const token = new Cookies().get("token");
    if (!token) {
      window.location = "/login";
    }
    axios.post("http://localhost:4000/app/user", { token }).then((res) => {
      setUser(res.data);
      setfirstrender(false);
    });
  }, [firstrender]);

  const handleClick = () => {
    if (showtotal === "dontshow") {
      setShowtotal("show");
      setTimeout(()=> {
        setShowtotal("dontshow")
      },3000)
    }
  };
  // const {cartitem}=props;
  return (
    <>
      <div  style = {{textAlign:"center",margin:"0"}}>
        <Header /> 
        <div className = {showtotal} style={{wordWrap:"wrap",margin:"0"}} ><div><h2>your order has ben recorded</h2>
       
        </div>
        </div>
       
        <div style = {{backgroundColor:"white",margin:"5vh 10vw",borderRadius:"7px"}} >
        <h2 style = {{padding:"4vh 0"}}><i>CART ITEMS</i></h2>

        {!firstrender ? (
          <div>
            <ul className="mobiles" >
              {user.cartitems.length ? (
                user.cartitems.map((mobile, index) => {
                  total = total + mobile.price;
                  return (
                    // <div >
                    <li key={index} style = {{display:"block"}}>
                      <div className="mobile" style = {{display:"flex",alignItems:"center",justifyContent:"space-between",borderLeft:"9px",borderTop:"0",borderBottom:"0",borderRight:"0",borderStyle:"solid",borderColor:"black",margin:"2vh 14vw",wordWrap:"wrap",backgroundColor:"orange",borderRadius:"7px"}}>
                        <div style = {{display:"flex",alignItems:"center"}}>
                        <img src={mobile.image} alt={mobile.title} style = {{margin:"2vh 2vw",borderRadius:"7px",height:"100px" ,width:"100px"}}></img>
                        <div style = {{margin:"2vh 2vw"}}><p>{mobile.title}</p>
                        <div className="mobile-price">{mobile.price}</div></div>
                        </div>
                        <div>
                        <button
                          className="button"
                          onClick={() => {
                            const x = { obj: mobile, user: user.email };
                            axios
                              .post("http://localhost:4000/app/delete", x)
                              .then(() => {
                                if (firstrender) {
                                  setfirstrender(false);
                                } else {
                                  setfirstrender(true);
                                }
                              });
                          }}
                        style={{backgroundColor:"red",margin:"0 2vw 0 0"}}>
                          Delete
                        </button>
                        </div>
                      </div>
                    </li>
                    // </div>
                  );
                })
              ) : (
                <li key="nothing" style={{display:"block" ,color:"Highlight" }}><h1>NO CART ITEMS TO DISPLAY</h1></li>
              )}
            </ul>
            <div> {total ? <p>YOUR TOTAL AMOUNT {total}</p> : null}</div>
            {user.cartitems.length ? (
              <button className = "button" onClick={handleClick}>BUY</button>
            ) : (
              <p></p>
            )}
          </div>
        ) : null}
        </div>
       
        
      </div>
    </>
  );
}

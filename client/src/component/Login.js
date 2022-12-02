
import React,{Component} from 'react'
import axios from 'axios'
import {Link,Redirect} from 'react-router-dom'
import Cookies from 'universal-cookie'
import '../Styles/Login.css'
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
          
            email:'',
            password:'',
            tohome:false
        }
        this.changeemail=this.changeemail.bind(this)
        this.changepaswrd=this.changepaswrd.bind(this)
        this.onsubmit=this.onsubmit.bind(this)

    }
    changeemail(event){
        this.setState({
            email:event.target.value
        })
    }
    changepaswrd(event){
        event.preventDefault()
        this.setState({
            password:event.target.value
        })
    }
    onsubmit = (event) => {
        event.preventDefault()
        const signin={
            email:this.state.email,
            password:this.state.password
        }
     
       console.log(signin)
    
        axios.post('http://localhost:4000/app/',signin).then((res)=>{
            console.log(res.data.user)
            if(res.data.user){
                const token = new Cookies()
                token.set('token', res.data.user.token)
                this.setState({tohome:true});
            
            }
            else{
                console.log('error')
            }
        })
    }
    render(){
        return(
            <div className="division">
                {this.state.tohome?<Redirect to="/home" />:<div>
                    <h1>User Login</h1>
                <form onSubmit={this.onsubmit} className="login">
                    
                    <input type='text' placeholder='Email' name='email'onChange={this.changeemail} value={this.state.email}/><br/>
                    <input type='password' placeholder='Password' name='password' onChange={this.changepaswrd} value={this.state.password}/><br/>
                    <button type = "submit" className ="button">LOGIN</button><br/>
                </form>
                <div><span className = "span">Don't have the account <Link to='/signup'>signup</Link></span></div>
                </div>
                }
            </div>
        )
    }
} 

export default Login;
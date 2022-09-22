import React,{Component} from 'react';
import './Login.css';
import $ from 'jquery'
import ReactFormInputValidation from "react-form-input-validation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineMail,AiOutlineGoogle } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { ImMobile } from "react-icons/im";
import { GrFacebookOption } from "react-icons/gr";
import { RiLockPasswordLine } from "react-icons/ri";

import { FaTwitter,FaRegAddressCard } from "react-icons/fa";
import { Link } from 'react-router-dom';

export class Login extends Component{

 constructor(){

super();
this.state={
    name:"",
    password:"",
    nameError:"",
    passwordError:""
            }
        }

valid(){
    if(!this.state.name.includes('@') && this.state.password.length<5){
       alert("name and pass incorrect")
    }

else if(!this.state.name.includes('@')){
    alert("Name in invalid")
}
else if(this.state.password.length<5){
    alert("Password incorrect");
}

    else{
        return true
    }
}

    submit(){
        if(this.valid()){
            alert("Form Subitted Successfully")
        }
    }
   

    render(){
        return(

<div className="login_main-body">
<br />
<div className="login_type">
</div>
<br /><br />
<div className="login_main">
<div className="login-h2-heading">
<h2>Login</h2>
<h2>Login</h2>
</div>
<br />
<form className="form-body">
  <p>{this.state.nameError}</p><br />
  <div className="input-container-login">
    <i className="fa fa-envelope login-icon"><AiOutlineMail className="icon-size"/></i>
    <input className="login-input-field" type="text" placeholder="Email" name="email" onChange={(event)=>{this.setState({name:event.target.value})}}/>
  </div>
  
  <div className="input-container-login">
    <i className="fa fa-key login-icon"><RiLockPasswordLine className="icon-size"/></i>
    <input className="login-input-field" type="password" placeholder="Password" name="psw" onChange={(event)=>{this.setState({password:event.target.value})}} />
  </div>
  <div className="input-container-forget-password"><Link to="/forget-psw" className="login-reg-link">Forget Password ?</Link></div>
  <div className="input-container-reg-link"><Link to="/registration" className="login-reg-link">Registration now ?</Link></div>

  <button type="submit" className="login-button" onClick={()=>this.submit()}>Login</button>


<br /><br />
  
      <div>
        <Link to="" class="fb btn-social">
          <i><GrFacebookOption className="icon-siz" /></i> Login with Facebook
         </Link>
        <Link to="" class="twitter btn-social">
          <i><FaTwitter className="icon-siz" /></i> Login with Twitter
       </Link>

        <Link to=""class="google btn-social"><i><AiOutlineGoogle className="icon-siz" />
          </i> Login with Google+
      </Link>

      </div>



</form>
</div>


</div>

            )
    }
}
export default Login
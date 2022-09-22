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

export class Registration extends Component{
 constructor(){

super();
this.state={
    name:"",
    password:"",
    nameError:"",
    passwordError:""
            }
        } 
        sub(){
          if(this.state.name.includes('@')){
            alert("Name is invalid");
          }else{
            return true;
          }
        }

valid(){
  if(this.sub()){
    alert("Form submit ");
  }
}
    render(){
        return(

<div className="login_main-body">
<br />
<div className="login_type">
</div>
<br /><br />
<div className="extra">
<div className="reg_main">
<div className="login-h2-heading">
<h2>Registration</h2>
<h2>Registration</h2>
</div>
<br />


<form className="reg-form-body">
  
  <div className="input-container-reg">
    <i className="fa fa-envelope reg-icon"><BiUserCircle className="icon-size"/></i>
    <input className="reg-input-field" type="text" placeholder="Enter Your Name" name="name" onChange={(event)=>{this.setState({name:event.target.value})}} />
  </div>

  <div className="input-container-reg">
    <i className="fa fa-envelope reg-icon"><AiOutlineMail className="icon-size"/></i>
    <input className="reg-input-field" type="email" placeholder="Enter Your Email" name="email" onChange={(e)=>{this.setState({email:e.target.value})}} />
  </div>

  <div className="input-container-reg">
    <i className="fa fa-envelope reg-icon"><ImMobile className="icon-size"/></i>
    <input className="reg-input-field" type="text" placeholder="Enter Your Mobile" name="number" require />
  </div>

  <div className="input-container-reg">
    <i className="fa fa-envelope reg-icon"><FaRegAddressCard className="icon-size"/></i>
    <textarea  rows="2" cols="21" className="reg-input-field" placeholder="Enter Your Address" name="address" require   />
  
  </div>

  <div className="input-container-reg">
    <i className="fa fa-envelope reg-icon"><AiOutlineMail className="icon-size"/></i>
    <input className="reg-input-field" type="password" placeholder="Enter Password" name="password" require />
  </div>
  
 
  
  <div className="input-container-reg-link"><p className="login-reg-link new_login-btn">Login Now ?</p></div>

  <button type="submit" className="reg-submit-button" onClick={()=>this.valid()}>Sigh Up</button>


<br /><br />
  </form>
</div>


</div>

</div>
            )
    }
}
export default Registration
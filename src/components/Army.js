import React,{Component} from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
export class Army extends Component{





    render(){
        return(
<div className="container">

<form role="form">
            <div class="form-group">
                <label>Enter Your Email:</label>
                <input type="email" name="" class="form-control" placeholder="Enter Your Email" />
            </div>
            <div class="form-group">
                <label>Enter Your Password:</label>
                <input type="password" name="" class="form-control" placeholder="Enter Your Password" />
            </div>
            <div class="form-group">
                <label>Enter Your D.O.B.:</label>
                <input type="date" name="" class="form-control" placeholder="Enter Your D.O.B" />
            </div>
            
                <button class="btn btn-success">Responsive Vertical Form</button>
            


        </form>
</div>



            )
    }
}

export default Army;
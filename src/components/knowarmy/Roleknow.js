import React,{Component} from 'react';
import Arrowicon from '@material-ui/icons/ArrowForward';
import {Link} from 'react-router-dom';
export class Roleknow extends Component{
        render(){
                return(

<div className="Apppp">

 
            <div className="container-fluid first-heading--">
            
            <div className="row row-first-heading"><h2><Arrowicon />&nbsp;Know Your Army</h2></div>
          
            </div>

<br /><br />
            
            <div className="knowarmy-role">
            <div className="knowarmy-role-content">
            <h3><br /><p> Role</p></h3>
            
            

        <p>
<br /><br />
Indian Army is mandated to safeguard National Interests from External Aggression and Internal Subversion.


        </p>
        </div>


    <div className="knowarmy-main-side-link">

            <h3><Arrowicon />&nbsp;Know Your Army</h3><hr />
     <p><Link to="/History" className="knowarmy-side-link">History</Link></p><hr />
     <p><Link to="/roleknow" className="knowarmy-side-link">Role</Link></p><hr />
     <p><Link to="/task" className="knowarmy-side-link">Task</Link></p><hr />
     <p><Link to="/combatedge" className="knowarmy-side-link">Combat Edge</Link></p><hr />
     <p><Link to="/command" className="knowarmy-side-link">Command and Control</Link></p><hr />
     <p><Link to="/leedership" className="knowarmy-side-link">Leedership</Link></p><hr />
     <p><Link to="/modernisation" className="knowarmy-side-link">Modernisation</Link></p><hr />
     <p><Link to="/afspa" className="knowarmy-side-link">AFSPA</Link></p><hr />

     
            
            </div>


 </div>

</div>

                        )
        }
}
export default Roleknow
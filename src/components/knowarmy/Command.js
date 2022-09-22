import React,{Component} from 'react';
import Arrowicon from '@material-ui/icons/ArrowForward';
import {Link} from 'react-router-dom';
export class Command extends Component{
        render(){
                return(

<div className="Apppp">

 
            <div className="container-fluid first-heading--">
            
            <div className="row row-first-heading"><h2><Arrowicon />&nbsp;Know Your Army</h2></div>
          
            </div>

<br /><br />
            
            <div className="knowarmy-role">
            <div className="knowarmy-role-content">
            <h3><br /><p> COMMAND AND CONTROL OF THE INDIAN ARMY</p></h3>
            
            

        <p>
<br /><br />
The President of India is the Supreme Commander of the Indian Armed Forces. As in all democracies, the Indian Armed Forces are controlled by the elected political leadership of the Nation - The Government of India. Executive control is exercised sequentially through the Union Cabinet, the Defence Minister, the Chiefs of Staff Committee (COSC) and the Chiefs of Army, Naval and Air Staff of their respective Services. The Ministry of Defence handles matters related to personnel, financial and resource management.


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
export default Command


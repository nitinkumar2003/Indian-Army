import React,{Component} from 'react';
import Arrowicon from "@material-ui/icons/ArrowForward";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Exploreadvanture extends Component{
	render(){

		return(
      <div className="Apppp">

 
            <div className="container-fluid first-heading--">
            
            <div className="row row-first-heading"><h2><Arrowicon />&nbsp;Explore Army</h2></div>
          
            </div>

<br /><br />

<div className="expl-advanture">
            <div className="expl-advanture-content">
            <h3><br /><p>Army Advanture Wing</p></h3>
             <p>
     Army Adventure Wing (AAW) under the Directorate General of Military Training is the apex body for the planning, conduct, coordination and promotion of adventure activities in the Army.

 <br /><br />

Vastly different from recreational sports, only activities possessing high risk content are patronised by AAW.

 <br /><br />

Presently AAW conducts training in 17 different adventure disciplines categorised under three fields of Aero, Aqua and Land.
<br /><br />
 

There are 25 state-of-the-art Army Adventure Training Centres in the Army that impart specialised training and certification to all volunteers that have the zeal and enthusiasm to pursue adventure activities. 

            </p>
          </div>


              <div className="about-idea-ethos-link">
            <h3><Arrowicon />&nbsp;Explore Army</h3><hr />
     <p><Link to="/explorestable" className="about-side-link"> Inter Services Establishments</Link></p><hr />
     <p><Link to="/exploresport" className="about-side-link">Sports and Achivements</Link></p><hr />
     <p><Link to="/exploreadvanture" className="about-side-link">Advanture Activities</Link></p><hr />
     <p><Link to="/explorewar" className="about-side-link">War Memorial</Link></p>
            
            </div>
            
            </div>
           
            
</div>

			)
	}
}

export default Exploreadvanture;
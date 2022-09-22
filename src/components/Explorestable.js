import React,{Component} from 'react';
import Arrowicon from "@material-ui/icons/ArrowForward";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Explorestable extends Component{
	render(){

		return(

 <div className="Apppp">

 
            <div className="container-fluid first-heading--">
            
            <div className="row row-first-heading"><h2><Arrowicon />&nbsp;Training Establishment</h2></div>
          
            </div>

<br /><br />
<div className="about-structure">
            <div className="about-structure-content">
            <h3><br /><p></p></h3>
             
            <p>
             <img src="assets/image/exploreestable-1.jpg" className="about-structure-img" />
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

export default Explorestable
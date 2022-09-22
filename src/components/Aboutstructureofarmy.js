import React,{Component} from 'react';
import Arrowicon from "@material-ui/icons/ArrowForward";
import { Link } from 'react-router-dom';
export class Aboutstructureofarmy extends Component{
	render(){
		return(

<div className="Apppp">

 
            <div className="container-fluid first-heading--">
            
            <div className="row row-first-heading"><h2><Arrowicon />&nbsp;ABOUT US</h2></div>
          
            </div>

<br /><br />
<div className="about-structure">
            <div className="about-structure-content">
            <h3><br /><p>Structure of Indian Army</p></h3>
             
            <p>
             <img src="assets/image/know-army-structure.jpg" className="about-structure-img" />
            </p>
          </div>


            <div className="about-idea-ethos-link">
            <h3><Arrowicon />&nbsp;About</h3><hr />
     <p><Link to="/aboutorgdef" className="about-side-link">Organization of Ministory Defence</Link></p><hr />
     <p><Link to="/aboutstructureofarmy" className="about-side-link">Structure of Indian Army</Link></p><hr />
     <p><Link to="/aboutidea" className="about-side-link">Our Ethos</Link></p><hr />
     <p><Link to="/abouttheme" className="about-side-link">Theme of the Year 2021"Strong & Capable"</Link></p>
            
            </div>
            
            </div>
           
            
</div>
			)
	}
}

export default Aboutstructureofarmy
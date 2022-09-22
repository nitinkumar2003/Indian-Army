import React,{Component} from 'react';
import Arrowicon from "@material-ui/icons/ArrowForward";
import { Link } from 'react-router-dom';
export class Aboutheme extends Component{
	render(){
		return(
<div className="Apppp">

 
            <div className="container-fluid first-heading--">
            
            <div className="row row-first-heading"><h2><Arrowicon />&nbsp;ABOUT US</h2></div>
          
            </div>

<br /><br />
<div className="about-theme">
            <div className="about-theme-content">
            <h3><br /><p>Theme of the year 2021 Strong & Capabale</p></h3>
             
            <p>
      Since Independence, Indian Army has proved its mettle as a “STRONG & CAPABLE” organisation in ensuring sovereignty, defending territorial integrity, extending assistance during natural calamities and excelling in the field of sports.
       Indian Army is a force to reckon with, comprising “STRONG & CAPABLE” men & women,
        who carry out their missions professionally and are ever willing to make the supreme
         sacrifice for the Nation.  

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

export default Aboutheme
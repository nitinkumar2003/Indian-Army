import React,{Component} from 'react';
import Arrowicon from "@material-ui/icons/ArrowForward";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
export class Aboutorgdef extends Component{
	render(){
		return(


<div className="Apppp">

 
            <div className="container-fluid first-heading--">
            
            <div className="row row-first-heading"><h2><Arrowicon />&nbsp;ABOUT US</h2></div>
          
            </div>

<br /><br />
<div className="about-org-def">
            <div className="about-org-def-content">
            <h3><br /><p>ORGANISATION OF MINISTRY OF DEFENCE</p></h3>
             
            <p>
            <h4>Organisational Set-Up And Functions</h4>
            After independence, the Ministry of Defence was created under the charge of a Cabinet Minister and each Service was placed under its own Commander-in-Chief. In 1955, the Commanders-in-Chief were renamed as the Chief of the Army Staff, the Chief of the Naval Staff and the Chief of the Air Staff. In November 1962, the Department of Defence Production was set up to deal with research, development and production of defence equipment. In November, 1965, the Department of Defence Supplies was created for planning and execution of schemes for import substitution of defence requirements. These two Departments were later merged to form the Department of Defence Production and Supplies. In 2004, the name of Department of Defence Production and Supplies was changed to Department of Defence Production. In 1980, the Department of Defence Research and Development was created. In 2004, the Department of Ex-Servicemen Welfare was created.
<br /><br />
The Defence Secretary functions as head of the Department of Defence and is additionally responsible for co-ordinating the activities of the four Departments in the Ministry.
<h4>The Ministry And Its Departments</h4>

The principal task of the Ministry is to frame policy directions on defence and security related matters and communicate them for implementation to the Services Headquarters, Inter-Service Organisations, Production Establishments and Research & Development Organisations. It is required to ensure effective implementation of the Government's policy directions and the execution of approved programmes within the allocated resources.
<br /><br />
The <b>Department of Defence </b>deals with the Integrated Defence Staff (IDS) and three Services and various Inter Service Organisations. It is also responsible for the Defence Budget, establishment matters, defence policy, matters relating to Parliament, defence co-operation with foreign countries and co-ordination of all defence related activities.
<br /><br />
The <b>Department of Defence Production </b>is headed by a Secretary and deals with matters pertaining to defence production, indigenisation of imported stores, equipment and spares, planning and control of departmental production units of the Ordnance Factory Board and Defence Public Sector Undertakings (DPSUs).

<br /><br />
The <b>Department of Defence Research and Development </b>is headed by a Secretary, who is the Scientific Adviser to the Raksha Mantri. Its function is to advise the Government on scientific aspects of military equipment and logistics and the formulation of research, design and development plans for equipment required by the Services.
<br /><br />

The <b>Department of Ex-Servicemen Welfare</b> is headed by a Secretary and deals with all resettlement, welfare and pensionary matters of Ex-Servicemen.
            

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
export default Aboutorgdef
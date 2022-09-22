import React,{Component} from 'react';
import Arrowicon from '@material-ui/icons/ArrowForward';
import {Link} from 'react-router-dom';
export class Modernisation extends Component{
	render(){
		return(

<div className="Apppp">

 
            <div className="container-fluid first-heading--">
            
            <div className="row row-first-heading"><h2><Arrowicon />&nbsp;Know Your Army</h2></div>
          
            </div>

<br /><br />
            
            <div className="knowarmy-modernation">
            <div className="knowarmy-modernation-content">
            <h3><br /><p>MODERNISATION</p></h3>
            
            

 	<p>

Our Major acquisitions are focused on building new capabilities as well as making up deficiencies in the inventory. With Defence Procurement Procedure-2013 coming into effect, indigenization will get due impetus. The Army also carried out alignment of the acquisition structures by streamlining the evolution of General Staff Qualitative Requirements (GSQRs), establishment of a Contracts Negotiation Committee (CNC) Cell and inclusion of Integrated Financial Adviser (IFA) Capital for delegated financial powers and strengthening of the Request for Proposal (RFP) Cell. All these measures have made the system more robust and efficient.

<br /><br /> 

<b>Mechanised Forces: </b>Modernisation of the mechanized forces is underway to meet the requirements of the future battle field. Upgradation of aspects of in-service equipment like night fighting capability, modern fire control systems and better power packs has been the thrust area. Concurrently, the indigenous development of future combat vehicle platforms is also being progressed.
<br /><br />
 

<b>Artillery:</b> Procurement of Artillery equipment is focused on conversion of equipment to 155 mm caliber, enhancing surveillance capabilities and acquisition of long range vectors.
<br /><br />
 

<b>Infantry:</b> Modernisation of the infantry soldier is aimed at enhancing lethality and providing individual protection. Procurement of modern Assault Rifles, Carbines and LMGs alongwith Bullet Proof Jackets and Ballistic Helmets is underway.
<br /><br />
 

<b>Army Air Defense:</b> The Corps of Army Air Defence is taking major strides in upgrading its gun and missile systems. A number of quality upgrades and inductions which are in the pipeline would replace the existing vintage equipment.

 
<br /><br />
<b>Common Equipment:</b> In addition to acquisitions specific to different arms, induction of High Mobility Vehicles, Materials Handling Equipment and critical Rolling Stock for rail movement are in the pipeline. Modernisation of logistics installations with state of the art warehousing facilities, retrieval and accounting systems is also underway.

 <br /><br />

<b>Synergy with the DRDO: </b>Army has enhanced its interactions with Defence Research Development Organisation (DRDO). Projects addressing ammunition needs are being given priority so that we can move towards self reliance. 	

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
export default Modernisation
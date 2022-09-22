import React,{Component} from 'react';
import Arrowicon from "@material-ui/icons/ArrowForward";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Exploresport extends Component{
  render(){

    return(
<div className="Apppp">

 
            <div className="container-fluid first-heading--">
            
            <div className="row row-first-heading"><h2><Arrowicon />&nbsp;Explore Army</h2></div>
          
            </div>

<br /><br />
<div className="explore-sport">
            <div className="explore-sport-content">
             <h3> <p>Sports and Achievements</p></h3>


            <div className="explore-sport-div-1">

<img src="assets/image/explore-milkhasingh.jpg" className="explore-sport-img"/>
<br /><br />
<p>

NAIB SUBEDAR MILKHA SINGH IN ACTION AT 1958 COMMONWEALTH GAMES IN CARDIFF

<br /><br /> 
Milkha Singh popularly known as “The Flying Sikh” was recruited as a Sepoy in 1951.
 A track and field sprinter, he was introduced to the sport while serving in the Indian Army.
  He was the only Indian athlete to win an individual athletics gold medal at Commonwealth Games till 2012.
   He also won gold medals in the 1958 and 1962 Asian Games. He represented India in the 1956 Summer Olympics 
   in Melbourne, the 1960 Summer Olympics in Rome and the 1964 Summer Olympics in Tokyo


</p>


            </div>
             <div className="explore-sport-div-2">
<img src="assets/image/explores-sapoy-basant.jpg" className="explore-sport-img" />

<br /><br />
<p>

SEPOY BASANT BAHADUR RANA
<br /><br />
 
Sepoy Basant Bahadur Rana of 3/8 Gurkha Rifels qualified for the Olympics at the 2012 
IAAF World Race Walking Cup in Saransk, Russia in May 2012, with a B qualifying standard.
</p>
             </div>

            <div className="explore-sport-div-1">

<img src="assets/image/explore-naib-subedar.jpeg" className="explore-sport-img"/>
<br /><br />
<p>
NAIB SUBEDAR SHIVNATH SINGH

 <br /><br />
Naib Subedar Shivnath Singh of Bihar Regiment was the finest long distance runner
 India has ever produced. He gave sterling performance at the Teheran Asian Games in 1974 
 winning gold medal in 5000m with new Asian record of 14m 20.5s. He also won the silver medal in 
 10000m clocking 30m 49.9s. In the Seoul Asian Championship in 1975 he again won the silver medals 
 in both these events.

</p>


            </div>
             <div className="explore-sport-div-2">
<img src="assets/image/explore-shriram.jpg" className="explore-sport-img" />

<br /><br />
<p>

 
HONORARY CAPTAIN SHRIRAM SINGH SHEKHAWAT
<br /><br />
 
VSM is one of the greatest middle distance runner (800m) of India. He won Gold medals in 1974 & 78 Asian Games.

</p>
             </div>
            
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

export default Exploresport
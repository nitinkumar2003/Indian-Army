import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Arrowicon from "@material-ui/icons/ArrowForward";
import Bootstrap from 'react-bootstrap';
export class Home extends Component{

render(){
	return(

<div className="App">



<div className="home-slider-div">


<Carousel className="Carousel">
   
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100 image-height-width"
      src="assets/image/Slid-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    <h1 className="home-caurosal-h">Organization</h1>
     <h1 className="home-caurosal-h1">Organization Comes First</h1>
      <p className="home-caurosal-p"> Leaders view their role as promoting the  effectivensess of their command and achieving organization goals.</p>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100 image-height-width"
      src="assets/image/Slid-2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
    <h1 className="home-caurosal-h">Trained</h1>
     <h1 className="home-caurosal-h1">Well Trained</h1>
      <p className="home-caurosal-p">Our dynamic,comprehensive and operationally focussed training the complete spectrum conflicts and challenges</p>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100 image-height-width"
      src="assets/image/Slid-3.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
     <h1 className="home-caurosal-h">Victorious</h1>
     <h1 className="home-caurosal-h1">Always Victorious</h1>
      <p className="home-caurosal-p"> We have a glorious history or volour sacrifice and victories.</p>
    </Carousel.Caption>
  </Carousel.Item>
 
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100 image-height-width"
      src="assets/image/Slid-4.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
     <h1 className="home-caurosal-h">Responsibility</h1>
     <h1 className="home-caurosal-h1">Unlimited Responsibility</h1>
      <p className="home-caurosal-p"> We carry out duties and task professionally and without regard to personal safety We are ever willing to make the supreme sacrifice,if the situation so demands.</p>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100 image-height-width"
      src="assets/image/Slid-5.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h1 className="home-caurosal-h">Responsibility</h1>
     <h1 className="home-caurosal-h1">Unlimited Responsibility</h1>
      <p className="home-caurosal-p"> We carry out duties and task professionally and without regard to personal safety We are ever willing to make the supreme sacrifice,if the situation so demands.</p>
  
          </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100 image-height-width"
      src="assets/image/Slid-6.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
     <h1 className="home-caurosal-h">Commitment</h1>
     <h1 className="home-caurosal-h1">Commitment to Globel Security</h1>
      <p className="home-caurosal-p">An important pillar of india's diplomatic efforts and we have been at the forefrot of these endeavours.</p>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100 image-height-width"
      src="assets/image/Slid-7.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>

     <h1 className="home-caurosal-h">Contributions</h1>
     <h1 className="home-caurosal-h1">Contributions to UN</h1>
      <p className="home-caurosal-p"> Indian Army is one of the largest troop contribuors to United Nation peacekeeping missions.</p>

      </Carousel.Caption>
  </Carousel.Item>

<Carousel.Item interval={3000}>
    <img
      className="d-block w-100 image-height-width"
      src="assets/image/Slid-8.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
   <h1 className="home-caurosal-h">Loyalty</h1>
     <h1 className="home-caurosal-h1">Loyalty to the Nation</h1>
      <p className="home-caurosal-p">As lank component if the Inian Armed Forces.We Uphold of the ideals of the Constitution of india,thwart proxy wars and internal threats,assists our Government and people of India.</p>
      </Carousel.Caption>
  </Carousel.Item>



  <Carousel.Item>
    <img
      className="d-block w-100 image-height-width"
      src="assets/image/Slid-9.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
     <h1 className="home-caurosal-h">Future</h1>
     <h1 className="home-caurosal-h1">Future Ready Army</h1>
      <p className="home-caurosal-p"> tains its Armed Forces for strategic deterrence and if compelled; to win wars.We remain ready for full spectrum of challenges and conflicts A Nation mainLeaders view their role as promoting the  effectivensess of their command and achieving organization goals.</p>

    </Carousel.Caption>

  </Carousel.Item>
</Carousel>



</div>




















<div className="back-color">
<div className="army-home-content">
<br />
<br />
<div className="army-home-content-one">
<table className="army-home-table">

<tr>
<td className="td-1"><Link to="/knowarmy" className="indian-army-link"><img src="assets/image/you-know-army.jpg" className="army-home-td-image" />KNOW YOUR ARMY </Link></td>
<td className="td-1"><Link to="/knowarmy" className="indian-army-link"><img src="assets/image/indian-army-carrier.jpg" className="army-home-td-image" />CARRIER</Link></td>
<td className="td-1"><Link to="/knowarmy" className="indian-army-link"><img src="assets/image/army-award.jpg" className="army-home-td-image" />HONORS & AWARDS</Link></td>
</tr>

<tr>
<td className="td-1"><Link to="/knowarmy" className="indian-army-link"><img src="assets/image/indian-army-organization.jpg"  className="army-home-td-image" />ORGANISATION</Link></td>
<td className="td-1"><Link to="/knowarmy" className="indian-army-link"><img src="assets/image/indian-army-heros.jpg"  className="army-home-td-image" />OUR HEROS</Link></td>
<td className="td-1"><Link to="/knowarmy" className="indian-army-link"><img src="assets/image/indian-army-veterans.jpg"  className="army-home-td-image" />VETERANS CORNER</Link></td>

</tr>

</table>

</div>

<div className="army-home-content-two">
<div className="army-home-content-two-one"><Link to="/https://joinindianarmy.nic.in/" className="indian-army-link">JOIN INDIAN ARMY</Link></div>
<br />
<div className="army-home-content-two-two"> &nbsp;&nbsp;&nbsp;&nbsp;Letest News -></div>
<br />
<div className="army-home-content-two-three">
<marquee direction="up" scrollamount="2" onmouseover="this.stop();" onmouseout="this.start();">
<div className="army-news-link">

<p><Link to="/gallery" className="army-news-link-Link">REGISTRATION AS APPROVED ASC CONTRACTORS</Link><hr/></p>
<p><Link to="/gallery" className="army-news-link-Link">REGISTRATION AS APPROVED ASC CONTRACTORS</Link><hr/></p>
<p><Link to="/gallery" className="army-news-link-Link">REGISTRATION AS APPROVED ASC CONTRACTORS</Link><hr/></p>
<p><Link to="/gallery" className="army-news-link-Link">REGISTRATION AS APPROVED ASC CONTRACTORS</Link><hr/></p>
<p><Link to="/gallery" className="army-news-link-Link">REGISTRATION AS APPROVED ASC CONTRACTORS</Link><hr/></p>
  
</div>
</marquee>
</div>

</div>
</div>
</div>
<div className="Home-gallery-slide">




</div>


</div>


		)
}

}
export default Home


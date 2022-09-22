import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
export class Footer extends Component{
	render(){

		return(


<div className="App">
<div className="army-footer">
	<div className='army-footer-1'>
		<div><Link to="/History" className="army-footer-2">History</Link></div>
		<div><Link to="/aboutorgdef" className="army-footer-2">About</Link></div>
		<div><Link to="/Newsapi" className="army-footer-2">News</Link></div>
		<div><Link to="/Contact" className="army-footer-2">Contact</Link></div>
		<div><Link to="/Army" className="army-footer-2">Army</Link></div>
		<div className='army-footer-3'>Phone :07078216535 , 8766366091  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; @2121 All Right Reserved.
		<div><Link to="/Gallery" className="army-footer-4">Privacy Policy</Link></div></div>
		<div className='army-footer-5'>
			<div className='army-footer-6'> <Link to="/https://twitter.com/ijimworld" >
				<img src="assets/social/twitter.png" className='army-footer-image' /></Link>
				<Link to="/https://t.co/LHe6yDRaEu?amp=1" >
				<img src="assets/social/instagram.png" className='army-footer-image' /></Link>
				<Link to="https://www.facebook.com/kunal.gurjar.5201254" >
				<img src="assets/social/facebook.png" className='army-footer-image-fb' /></Link>
				</div>
				
		</div>
	</div>
</div>

</div>



			)
	}
}
export default Footer
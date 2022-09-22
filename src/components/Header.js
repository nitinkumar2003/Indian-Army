import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            
<div className="header-body">
<div className="header-logo">
<img src="assets/image/indian-army.png" className="indian-army-logo"/>
</div>
<div className="header-link-body">
<div className="ul-link">
<ul>
        <li><Link to="/" className="header-link">Home</Link></li>
        <li><Link to="/aboutorgdef" className="header-link">About</Link>

         <ul>
                <li className="ululul"><Link to="/aboutorgdef">Organization Of Ministory Of Defence</Link></li>                
                 <li className="ulul"><Link to="/aboutidea">Ideas And Ethos</Link></li>
                 <li className="ulul"><Link to="/aboutstructureofarmy">Structure of Indian Army</Link></li>
                <li className="ulul"><Link to="/abouttheme">Theme Of the Year</Link></li>

            </ul>

        </li>
        <li><Link to="/armychief" className="header-link">Leaders</Link>

        <ul>
                <li className="ulul"><Link to="/armychief">Chief of Army Staff</Link></li>
                <li className="ulul"><Link to="/armyvicechief">Vice Chief of Army Staff</Link></li>
                 <li className="ulul"><Link to="/armycomander">Army Commanders</Link></li>
                 <li className="ulul"><Link to="/armydeputychief">Deputy Chief of Army Staff</Link></li>

            </ul>

        </li>
        <li><Link to="/explorestable" className="header-link">Explore</Link>
            <ul>
                <li className="ulul"><Link to="/explorestable">Explore Establishment</Link></li>
                <li className="ulul"><Link to="/exploresport">Sports and Achivements</Link></li>
                 <li className="ulul"><Link to="/exploreadvanture">Advanture Activities</Link></li>
                 <li className="ulul"><Link to="/explorewar">War Memorial</Link></li>

            </ul>
        </li>
         <li><Link to="/contact" className="header-link">Contact</Link></li>
         <li><Link to="/newsapi" className="header-link">News</Link></li>
        
         
         <Button variant="primary" className="header-link-button" href="/login">LOGIN</Button>


    </ul>
    </div>
</div>
                
            </div>
        )
    }
}

export default Header

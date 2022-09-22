import logo from './logo.svg';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from './components/Header';
import Login from './components/Login';
import Registration from './components/Registration';

import Newsapi from './components/Newsapi';
import Home from './components/Home';
import Contact from './components/Contact';

import Army from './components/Army';
import Armychief from './components/Armychief';
import Armyvicechief from './components/Armyvicechief';
import Armycommanders from './components/Armycommanders'; 
import Armydeputychief from './components/Armydeputychief';
import Aboutorgdef from './components/Aboutorgdef';
import Aboutidea from './components/Aboutidea';
import Aboutheme from './components/Aboutheme';
import Aboutstructureofarmy from './components/Aboutstructureofarmy';



import Footer from './components/knowarmy/Footer';



//Explore
import Explorestable from './components/Explorestable';
import Exploresport from './components/Exploresport';
import Exploreadvanture from './components/Exploreadvanture';
import Explorewar from './components/Explorewar';


import Knowarmy from './components/knowarmy/Knowarmy';
import History from './components/knowarmy/History';
import Roleknow from './components/knowarmy/Roleknow';
import Task from './components/knowarmy/Task';
import Combatedge from './components/knowarmy/Combatedge';
import Command from './components/knowarmy/Command';
import Leedership from './components/knowarmy/Leedership';
import Modernisation from './components/knowarmy/Modernisation';
import Afspa from './components/knowarmy/Afspa';



import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">







      <Router>
      <Header />
      
     

      <main className="app-js-main">
        <section>
          <Switch>
        
            <Route path="/" exact component={Home} />

            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration } />

            <Route path="/contact" exact component={Contact} />

            <Route path="/newsapi" exact component={Newsapi} />

            <Route path="/Indianarmy" exact component={Army} />

            <Route path="/armychief" exact component={Armychief} />
            <Route path="/armyvicechief" exact component={Armyvicechief} />
            <Route path="/armycomander" exact component={Armycommanders} />
            <Route path="/armydeputychief" exact component={Armydeputychief} />

            <Route path="/aboutorgdef" exact component={Aboutorgdef} />
            <Route path="/aboutidea" exact component={Aboutidea} />
            <Route path="/abouttheme" exact component={Aboutheme} />
            <Route path="/aboutstructureofarmy" exact component={Aboutstructureofarmy} />

            
//Explore

            <Route path="/explorestable" exact component={Explorestable} />
            <Route path="/exploresport" exact component={Exploresport} />
            <Route path="/exploreadvanture" exact component={Exploreadvanture} />
            <Route path="/explorewar" exact component={Explorewar} />

           
            <Route path="/knowarmy" exact component={Knowarmy} />
            <Route path="/history" exact component={History} />
            <Route path="/roleknow" exact component={Roleknow} />
            <Route path="/task" exact component={Task} />
            <Route path="/combatedge" exact component={Combatedge} />
            <Route path="/command" exact component={Command} />
            <Route path="/leedership" exact component={Leedership} />
            <Route path="/modernisation" exact component={Modernisation} />
            <Route path="/afspa" exact component={Afspa} />

            


          </Switch>
        </section>
      </main>
      <Footer />
      </Router>

      
    </div>
  );
}

export default App;

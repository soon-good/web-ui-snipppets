import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Landing } from './Landing';
import { Navbar } from './Navbar';
import { Services } from './Services';
import { About } from './About';
import { Portfolio } from './Portfolio';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Route path="/" exact={true} component={Landing}/>
      <Route path="/about" component={About}/>
      <Route path="/services" component={Services}/>
      <Route path="/portfolio" component={Portfolio}/>
    </Fragment>
  );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import MobileFooter from './components/MobileFooter';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className='App'>
      <ErrorPage>
        <Nav/>
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <MobileFooter/>
      </ErrorPage>
    </div>
  );
}

export default App;

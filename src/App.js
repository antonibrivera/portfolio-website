import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import MobileFooter from './components/MobileFooter';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className='App'>
      <ErrorPage>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Home} />
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

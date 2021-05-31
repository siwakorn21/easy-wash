import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from './components/pages/NavBar';
import StoreForm from './components/pages/StoreForm';
import UserForm from './components/pages/UserForm';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/user'>
            <UserForm />
          </Route> 
          <Route path='/store'>
            <StoreForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

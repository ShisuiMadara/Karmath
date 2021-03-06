import React, {Component} from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Resources from './pages/Resources';
// stylesheet
import './App.css';
import AboutUs from './pages/AboutUs';

class App extends Component {
  render(){
    return (
      <Router>
        <Header />
        <Routes>
            <Route exact path='/' element={(<><Home /><Footer /></>)}></Route>
            <Route exact path='/Home' element={(<><Home /> <Footer /></>)}></Route>
            <Route exact path='/dashboard' element={<Dashboard />}></Route>
            <Route exact path='/login' element={(<><Login /><Footer/></>)}></Route>
            <Route exact path='/registercompany'  element = {(<><Register type = "Company"/><Footer /></>)}> </Route>
            <Route exact path='/registeremployee'  element = {(<><Register type = "Employee"/><Footer /></>)}> </Route>
            <Route exact path='/resources'  element = {(<><Resources/><Footer /></>)}> </Route>
            <Route exact path='/About%20Us'  element = {(<><AboutUs/><Footer /></>)}> </Route>
          </Routes>
      </Router>

    );
  }

}

export default App;

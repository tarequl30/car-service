import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AuthProvider} from './Contexts/AuthContext';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  return (
  <AuthProvider>
    <Router>
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route path="/login">
         <Login />
       </Route>
       <PrivateRoute path="/dashboard">
        <Dashboard/>
       </PrivateRoute>
     </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;

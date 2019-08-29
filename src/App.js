import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import NavBar from "./components/NavBar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/about_me" component={AboutMe} />
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/" component={Home}/>          
        </Switch>

      </>
    );
  }
}

export default App;

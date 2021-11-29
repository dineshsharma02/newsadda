import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state={
    progress:0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <Router>
          
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            
          />


          <Routes>
            <Route path="/"  element={<News setProgress={this.setProgress} key="General" pageSize={9} country="in"  />}/>
              
            
            <Route path="/business" element={<News setProgress={this.setProgress} key="Business" pageSize={9} country="in" category="business" />}/>
              
            
            <Route path="/sports" element={<News setProgress={this.setProgress} key="Sports"  pageSize={9} country="in" category="sports" />} />
              
            
            
            <Route path="/entertainment" element={<News setProgress={this.setProgress} key="Entertainment" pageSize={9} country="in" category="entertainment" />} />
              
            
            <Route path="/health" element={<News setProgress={this.setProgress} key="Health" pageSize={9} country="in" category="health" />} />
              
            
            <Route path="/science" element={<News setProgress={this.setProgress} key="Science" pageSize={9} country="in" category="science" />} />
              
            
            <Route path="/tech" element={<News setProgress={this.setProgress} key = "Technology" pageSize={9} country="in" category="technology" />} />
              
            
          </Routes>
            
      </Router>
    );
  }
}

import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
          
          <NavBar />
          <Routes>
            <Route path="/"  element={<News key="General" pageSize={9} country="in"  />}/>
              
            
            <Route path="/business" element={<News key="Business" pageSize={9} country="in" category="business" />}/>
              
            
            <Route path="/sports" element={<News key="Sports"  pageSize={9} country="in" category="sports" />} />
              
            
            
            <Route path="/entertainment" element={<News key="Entertainment" pageSize={9} country="in" category="entertainment" />} />
              
            
            <Route path="/health" element={<News key="Health" pageSize={9} country="in" category="health" />} />
              
            
            <Route path="/science" element={<News key="Science" pageSize={9} country="in" category="science" />} />
              
            
            <Route path="/tech" element={<News key = "Technology" pageSize={9} country="in" category="technology" />} />
              
            
          </Routes>
            
      </Router>
    );
  }
}

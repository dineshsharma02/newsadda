import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)


    return (
      <Router>
          
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            
          />


          <Routes>
            
            <Route path="/"  element={<News setProgress={setProgress} key="General" pageSize={9} country="in" apiKey = {apiKey}  />}/>
            
            
            <Route path="/business" element={<News setProgress={setProgress} key="Business" pageSize={9} country="in" category="business" apiKey = {apiKey} />}/>
              
            
            <Route path="/sports" element={<News setProgress={setProgress} key="Sports"  pageSize={9} country="in" category="sports" apiKey = {apiKey} />} />
              
            
            
            <Route path="/entertainment" element={<News setProgress={setProgress} key="Entertainment" pageSize={9} country="in" category="entertainment" apiKey = {apiKey} />} />
              
            
            <Route path="/health" element={<News setProgress={setProgress} key="Health" pageSize={9} country="in" category="health" apiKey = {apiKey} />} />
              
            
            <Route path="/science" element={<News setProgress={setProgress} key="Science" pageSize={9} country="in" category="science" apiKey = {apiKey} />} />
              
            
            <Route path="/tech" element={<News setProgress={setProgress} key = "Technology" pageSize={9} country="in" category="technology" apiKey = {apiKey} />} />
              
            
          </Routes>
            
      </Router>
    );
  }
export default App;

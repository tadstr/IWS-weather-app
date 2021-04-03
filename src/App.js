import React from "react";
import "./App.css";
import Profile from "./components/Profiles/Profile";
import Copyright from "./components/Copyright/copyright";
import Widget from "./components/Widget/widget";

function App() {
  return (
      <div className="myProfile">
          <Profile />
          <Widget/>
          <Copyright/>
      </div>
      
  );
}

export default App;

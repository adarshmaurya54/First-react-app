import { useState } from "react";
import "./App.css";
import About from "./components/about.js";
import Navbar from "./components/navbar.js";
import TextForm from "./components/TextForm.js";
function App() {
  const [darkmode, setdarkmode] = useState({classname: "light", colorCode: "#f8f9fa"});
  document.body.style.backgroundColor =  darkmode.colorCode;
  function toggleDarkmode(){
    if(darkmode.classname === "dark"){
      setdarkmode({classname: "light", colorCode: "#f8f9fa"});
      document.body.style.backgroundColor =  "#f8f9fa";
    }else{
      setdarkmode({classname: "dark", colorCode: "#1a1c22"});
      document.body.style.backgroundColor =  "#1a1c22";
    }
  }
  return <>
    <Navbar title="TextUtil" mode={darkmode} toggleDarkmode={toggleDarkmode} about={{link: "https://www.google.com",text: "About"}}/>
    <TextForm mode={darkmode} FormTitle="Enter text below for analizing..."/>
  </>;
}

export default App;

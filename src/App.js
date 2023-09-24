import { useState } from "react";
import "./App.css";
import About from "./components/about.js";
import Navbar from "./components/navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert";
function App() {
  const [darkmode, setdarkmode] = useState({classname: "light", colorCode: "#f8f9fa"});
  const [alert, setAlert] = useState(null);
  let alertTimeout = null;
  const setAlertFunction = (Message, Type) => {
    if (alertTimeout !== null) {
      clearTimeout(alertTimeout);
    }
    setAlert({
      msg : Message,
      type: Type
    })
    document.querySelector(".alert").style.transform = "translate(-50%,-20%)";
    setTimeout(() => {
      document.querySelector(".alert").style.transform = "translate(-50%,-200%)";
    }, 2000);
  }

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
    <Alert alert={alert}/>
    <TextForm mode={darkmode} alertFunc={setAlertFunction} FormTitle="Enter text below for analizing..."/>
  </>;
}

export default App;

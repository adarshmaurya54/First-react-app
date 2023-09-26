import { useState } from "react";
import "./App.css";
import About from "./components/about.js";
import Navbar from "./components/navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert";
import { Route, Routes } from "react-router-dom";
function App() {
  const [darkmode, setdarkmode] = useState({ classname: "light", colorCode: "#f8f9fa" });
  const [alert, setAlert] = useState(null);
  const [alertTimeout, setAlertTimeout] = useState(null);

  // This function is used to show alert whenever user intract with any given buttons
  const setAlertFunction = (Message, Type) => {
    if (alertTimeout !== null) {
      clearInterval(alertTimeout);
    }
    setAlert({
      msg: Message,
      type: Type
    })
    document.querySelector(".alert").style.transform = "translate(-50%,-20%)";
    let intervalId = setTimeout(() => {
      document.querySelector(".alert").style.transform = "translate(-50%,-200%)";
    }, 2000);

    setAlertTimeout(intervalId)
  }

  document.body.style.backgroundColor = darkmode.colorCode;
  function changDarkColor(color) {
    if (darkmode.classname === "dark") {
      setdarkmode({ classname: "dark", colorCode: color });
      document.body.style.backgroundColor = color;
    }
  }
  function toggleDarkmode() {
    if (darkmode.classname === "dark") {
      setdarkmode({ classname: "light", colorCode: "#f8f9fa" });
      document.body.style.backgroundColor = "#f8f9fa";
      document.title = "TextUtil - Light Mode";
    } else {
      setdarkmode({ classname: "dark", colorCode: "#1a1c22" });
      document.body.style.backgroundColor = "#1a1c22";
      document.title = "TextUtil - Dark Mode";
    }
  }
  return <>
    <Navbar title="TextUtil" mode={darkmode} changDarkColor={changDarkColor} toggleDarkmode={toggleDarkmode} about={{ link: "./First-react-app/about", text: "About" }} />
    <Alert alert={alert} />

    <Routes>
      <Route exact path="/First-react-app/" element={<TextForm mode={darkmode} alertFunc={setAlertFunction} FormTitle="Enter text below for analizing..." />} />
      <Route exact path="/First-react-app/about" element={<About />} />
    </Routes>

  </>;
}

export default App;

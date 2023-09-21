import "./App.css";
import About from "./components/about.js";
import Navbar from "./components/navbar.js";
import TextForm from "./components/TextForm.js";
function App() {
  return <>
     <Navbar title="TextUtil" about={{link: "https://www.google.com",text: "About"}}/>
    <TextForm FormTitle="Enter text below for analizing..."/>
    {/* <About/> */}
  </>;
}

export default App;

import "./App.css";
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";
function App() {
  return <>
    <Navbar title="TextUtil" about={{link: "https://www.google.com",text: "About"}}/>
    <TextForm FormTitle="Enter text below for analizing..."/>
  </>;
}

export default App;

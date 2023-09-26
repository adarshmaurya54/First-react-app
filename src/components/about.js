import React, {useState} from 'react'

export default function About() {
    document.title = "TextUtil - ABOUT PAGE"
    const [css, setcss] = useState({
        color: "black",
        backgroundColor: "white",
        transition: "background-color 0.3s ease"
    })
    const [darkModeText, setDarkModeText] = useState("Enable Dark Mode")
    const enableDarkMode = () => {
        if(css.color === "white"){
            setcss({
                color: "black",
                backgroundColor: "white",
                transition: "background-color 0.3s ease"
            })
            setDarkModeText("Enable Dark Mode");
        }else{
            setcss({
                color: "white",
                backgroundColor: "rgb(22, 24, 29)",
                transition: "background-color 0.3s ease"
            })
            setDarkModeText("Enable Light Mode");
        }
    }
    return (
        <div className="container  my-5">
            <div className="shadow p-3 rounded"  style={css}>
                <h1 className="display-4">About TextUtil</h1>
                <p className="lead">TextUtil is a powerful online text manipulation tool that allows you to perform various operations on the text you provide. Whether you need to convert text to uppercase or lowercase, make it speak out loud, extract email addresses, or perform other text-related tasks, TextUtil has got you covered.</p>
                <p>Our mission is to simplify text processing tasks and provide a user-friendly platform for anyone who deals with text data on a regular basis. With TextUtil, you can save time and effort by automating common text-related operations.</p>
                <p>Key Features:</p>
                <ul>
                    <li>Convert text to uppercase or lowercase.</li>
                    <li>Make text speak out loud using text-to-speech technology.</li>
                    <li>Efficiently extract email addresses from text.</li>
                    <li>And much more!</li>
                </ul>
                <p>Join us on this journey to simplify text manipulation and enhance your productivity with TextUtil.</p>
                <br/>
                <b>{darkModeText}</b>
                <div className="fs-3 my-2 form-check form-switch">
                    <input className="form-check-input shadow-none" onClick={enableDarkMode} type="checkbox" id="flexSwitchCheckChecked" />
                </div>
            </div>
        </div>
    )
}

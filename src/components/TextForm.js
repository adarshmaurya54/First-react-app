import React, { useState, useEffect } from "react";
import Preview from "./Preview";

export default function TextForm(props) {
  const [marginSet, setMargin] = useState("0px");
  const [len, setlen] = useState("");


  const [text, setText] = useState("");
  // use to update the text inputted in text box
  const updateText = (e) => {
    setText(e.target.value);
    // Check if the textarea is empty or Ctrl+Backspace is pressed (key code 8)
    if (e.target.value.trim() === '' || (e.ctrlKey && e.keyCode === 8)) {
      setMargin("2px");
    } else {
      setMargin("-8px");
    }
  };

  const speak = () => {
    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;

      // Get the list of available voices
      const voices = synth.getVoices();

      // Find and select an Indian voice (e.g., Hindi or another regional language)
      const indianVoice = voices.find(voice => voice.lang.includes('hi')); // 'hi' is the language code for Hindi

      if (indianVoice) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = indianVoice;

        // Speak the text with the selected Indian voice
        synth.speak(utterance);
      } else {
        console.log('Indian voice not found.');
      }
    } else {
      console.log('Speech synthesis not supported in this browser.');
    }
  }

  // email extractor from the given text
  const emailPrint = () => {
    const email = extractEmails();
    document.getElementById("email").innerHTML = "<b>Email : </b>" + email;
  }
  const extractEmails = () => {
    const emailRegex = /[\w.-]+@[\w.-]+\.[A-Za-z]{2,}/g;
    return text.match(emailRegex) || [];
  }

  //this function is used to capitalize the text inputted in text box...
  const handleCaptText = () => {
    const words = text.split(/[ \n]+/);
    const capitalizedWords = words.map((word) => {
      if (word.length === 0) {
        return "";
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    });
    setText(capitalizedWords.join(" "));
  };

  // This function is used to remove the extra space between two words
  function handleExtraSpaces() {
    const words = text.split(/[ ]+/);
    setText(words.join(" "))
  }

  // this function is used to count then number of words entered in the text box field
  function countWordsExcludingSpacesAndNewlinesAtEnd(text) {
    let wordlen = text.split(" ").length - 1;
    wordlen = text.trim().split(/\s+/).filter(Boolean).length;
    return wordlen;
  }

  // this is used to count how many times a normal human can takes to read one word
  let wordReadTime = (0.004 * countWordsExcludingSpacesAndNewlinesAtEnd(text)) * 60;

  return (
    
    <>
      <div className={`container ${(props.mode.classname == "dark") ? "text-white" : "text-dark"}`}>
        <div className="p-3 shadow my-3 rounded">
          <h1 className="my-3 border-bottom border-dark pb-2">
            {props.FormTitle}
          </h1>
          <div className="mb-3 preview rounded border-none">
            <div className="upper-btns rounded">
              <div title="Close" className="close btn1"></div>
              <div
                title="Minimise, which is currently not working yet :("
                className="mini btn1"
              ></div>
              <div
                title="Maximize, which is currently not working yet :("
                className="maxi btn1"
              ></div>
            </div>
            <div className="text textareatitle">
              <div className="text-center">
                <pre>Text.txt</pre>
              </div>
            </div>
            <textarea spellCheck={false} onChange={updateText} value={text} placeholder="Enter your text here..." className="form-control shadow-none" style={{ resize: "none",     padding: "26px 11px 0px 11px", background: "transparent", color: "white" }} id="exampleFormControlTextarea1" rows="8"></textarea>
          </div>
          <p className="my-2">{len}</p>
          <button
            onClick={() => {
              setText(text.toUpperCase());
            }}
            className={`btn btn-outline-${(props.mode.classname == "dark") ? "light" : "dark"} shadow-none me-2 mb-2`}
          >
            Uppercase
          </button>
          <button
            onClick={() => {
              setText(text.toLowerCase());
            }}
            className={`btn btn-outline-${(props.mode.classname == "dark") ? "light" : "dark"} shadow-none me-2 mb-2`}
          >
            Lowercase
          </button>
          <button
            onClick={handleCaptText}
            className={`btn btn-outline-${(props.mode.classname == "dark") ? "light" : "dark"} shadow-none me-2 mb-2`}
          >
            Capitalize
          </button>
          <button
            onClick={emailPrint}
            className={`btn btn-outline-${(props.mode.classname == "dark") ? "light" : "dark"} shadow-none me-2 mb-2`}
          >
            Extract Email
          </button>
          <button
            onClick={speak}
            className={`btn btn-outline-${(props.mode.classname == "dark") ? "light" : "dark"} shadow-none me-2 mb-2`}
          >
            Speak
          </button>
          <button
            onClick={handleExtraSpaces}
            className={`btn btn-outline-${(props.mode.classname == "dark") ? "light" : "dark"} shadow-none me-2 mb-2`}
          >
            Remove Extra Spaces
          </button>
          <button
            onClick={() => {
              setlen("");
              setText("");
            }}
            className="btn btn-outline-danger shadow-none me-2 mb-2"
          >
            Clear All
          </button>
          <p id="email" style={{ overflowWrap: "break-word" }} className="my-2">

          </p>
        </div>
        <div className="p-3 shadow my-3 rounded">
          <h1 className="my-3 border-bottom border-dark pb-2">
            Your text summary
          </h1>
          <p>
            <b>
              <em>{countWordsExcludingSpacesAndNewlinesAtEnd(text)}</em>
            </b>{" "}
            {countWordsExcludingSpacesAndNewlinesAtEnd(text) >= 1
              ? "words"
              : "word"}{" "}
            and{" "}
            <b>
              <em>{text.length}</em>
            </b>{" "}
            {text.length > 1 ? "characters" : "character"}
          </p>
          <p className="badge bg-light text-dark fs-6">
            {wordReadTime.toFixed(2) + " seconds takes to read."}
          </p>
          <Preview title="Preview.txt" margin={marginSet} text={text} />
        </div>
      </div>
    </>
  );
}

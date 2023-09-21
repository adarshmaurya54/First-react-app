import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [len, setlen] = useState("");
  // use to update the text inputted in text box
  const updateText = (e) => {
    setText(e.target.value);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
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
      <div className="container ">
        <div className="p-3 shadow my-3 rounded">
          <h1 className="my-3 border-bottom border-dark pb-2">
            {props.FormTitle}
          </h1>
          <div className="mb-3">
            <textarea
              onChange={updateText}
              value={text}
              placeholder="Enter your text here..."
              className="form-control shadow-none"
              style={{ resize: "none" }}
              id="exampleFormControlTextarea1"
              rows="8"
            ></textarea>
          </div>
          <p className="my-2">{len}</p>
          <button
            onClick={() => {
              setText(text.toUpperCase());
            }}
            className="btn btn-outline-dark shadow-none me-2 mb-2"
          >
            Uppercase
          </button>
          <button
            onClick={() => {
              setText(text.toLowerCase());
            }}
            className="btn btn-outline-secondary shadow-none me-2 mb-2"
          >
            Lowercase
          </button>
          <button
            onClick={handleCaptText}
            className="btn btn-outline-info shadow-none me-2 mb-2"
          >
            Capitalize
          </button>
          <button
            onClick={emailPrint}
            className="btn btn-outline-success shadow-none me-2 mb-2"
          >
            Extract Email
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
          <p id="email" className="my-2">

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
          <div className="preview">
            <div className="upper-btns">
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
            <div className="text">
              <div className="text-center">
                <pre>Preview.txt</pre>
              </div>
            </div>
          </div>
          <div className="w-100 border border-dark text-white p-2 pt-4 rounded previewText">
            <pre>{text}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

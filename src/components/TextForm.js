import React, {useState} from "react";

export default function TextForm(props){
    const [text, setText] = useState(""); 
    const [len, setlen] = useState(""); 
    const updateText = (e)=> {
        setText(e.target.value);
    }
    let wordlen = (text.split(" ").length) - 1;
    wordlen = (text.length >= 1 && (wordlen == 0)) ? 1 : (wordlen == 0)? wordlen : wordlen+1; 
    wordlen = wordlen + ((wordlen == 0)? 0 : text.split("\n").length - 1);
    let wordReadTime = (0.004 * wordlen);
    return (
        <>
            <div className="container ">
                <div className="p-3 shadow my-3 rounded">
                    <h1 className="my-3 border-bottom border-dark pb-2">{props.FormTitle}</h1>
                    <div className="mb-3">
                        <textarea onChange={updateText} value={text} placeholder="Enter your text here..." className="form-control shadow-none" style={{resize: 'none'}} id="exampleFormControlTextarea1" rows="8"></textarea>
                    </div>
                    <p className="my-2">{len}</p>
                    <button onClick={()=>{setText(text.toUpperCase())}} className="btn btn-outline-dark shadow-none me-2 mb-2">Uppercase</button>
                    <button onClick={()=>{setText(text.toLowerCase())}} className="btn btn-outline-secondary shadow-none me-2 mb-2">Lowercase</button>
                    <button onClick={()=>{setlen("");setText(""); }} className="btn btn-outline-danger shadow-none me-2 mb-2">Clear All</button> 
                </div>
                <div className="p-3 shadow my-3 rounded">
                    <h1 className="my-3 border-bottom border-dark pb-2">Your text summary</h1>
                    <p>
                        <b><em>{wordlen}</em></b> {(wordlen >= 1) ? "words" : "word"} and <b><em>{text.length}</em></b> {(text.length > 1)? "characters" : "character"}
                    </p>    
                    <p className="badge bg-light text-dark fs-6">{(text.trim() !== '') ? ((wordReadTime < 1) ? wordReadTime.toFixed(4) + " seconds takes to read." : wordReadTime.toFixed(4) + " minutes takes to read.") : ""} </p>
                    <div className="preview">
                        <div className="upper-btns">
                            <div title="Close" className="close btn1"></div>
                            <div title="Minimise, which is currently not working yet :(" className="mini btn1"></div>
                            <div title="Maximize, which is currently not working yet :(" className="maxi btn1"></div>
                        </div>
                        <div className="text">
                            <div className="text-center">
                                <pre>Preview.txt</pre>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 border border-dark text-white p-2 pt-4 rounded previewText">
                        <pre>
                            {text}
                        </pre>
                    </div>
                </div>
            </div>
        </>
    );
}
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'


export default function Preview(props) {
    const [blickCursor, setCursor] = useState({
        display: "inline-block",
        opacity: "1"
    })
    const [darkmode, setdarkmode] = useState("");

    useEffect(() => {
        let intervalId = setInterval(() => {
            const bodyBackgroundColor = window.getComputedStyle(document.body).backgroundColor;
            if (bodyBackgroundColor === "rgb(248, 249, 250)") {
                setdarkmode("light");
            } else {
                setdarkmode("dark");
            }
            setCursor((prevCursor) => ({
                ...prevCursor,
                opacity: prevCursor.opacity === '1' ? '0' : '1',
            }));
        }, 500);

        // Clear the interval and set opacity to '1' when props change
        return () => {
            clearInterval(intervalId);
        };
    }, [props]);
    return (
        <>
            <div className={`preview ${(darkmode === "dark") ? "border-top border-3 rounded-top" : ""}`}>
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
                <div className="text ">
                    <div className="text-center">
                        <pre>{props.title}</pre>
                    </div>
                </div>
            </div>
            <div className={`w-100 mb-3 text-white p-2 pt-4 ${(darkmode === "dark") ? "rounded-bottom" : "rounded"} previewText`}>
                <pre id='preview'><span style={{ marginRight: props.margin }}>{props.text}</span> <p id='cursor' style={blickCursor}>|</p></pre>
            </div>
        </>
    )
}

Preview.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

Preview.defaultProps = {
    cursor: "pointer"
}
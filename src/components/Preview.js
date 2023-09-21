import React, {useState,useEffect} from 'react'
import PropTypes from 'prop-types'


export default function Preview(props) {
    const [blickCursor, setCursor] = useState({
        display : "inline-block",
        opacity : "1",
        marginLeft: "-8px"
    })
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCursor((prevCursor) => ({
            ...prevCursor,
            opacity: prevCursor.opacity === '1' ? '0' : '1',
          }));
        }, 500);
    
        return () => clearInterval(intervalId);
      }, []);
    return (
        <div>
            <>
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
                            <pre>{props.title}</pre>
                        </div>
                    </div>
                </div>
                <div className="w-100 mb-3 border border-dark text-white p-2 pt-4 rounded previewText">
                    <pre>{props.text} <p style={blickCursor}>|</p></pre>
                </div>
            </>
        </div>
    )
}

Preview.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

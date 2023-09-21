import React from 'react'
import PropTypes from 'prop-types'


export default function Preview(props) {
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
                    <pre>{props.text}</pre>
                </div>
            </>
        </div>
    )
}

Preview.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

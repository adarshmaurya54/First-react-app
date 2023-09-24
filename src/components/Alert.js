import React from 'react'

export default function Alert(props) {
  return (
    <div className={`alert alert-${(props.alert !== null) ? props.alert.type : "info"}`} role="alert">
        {(props.alert !== null) ? props.alert.msg : ""}
    </div>
  )
}

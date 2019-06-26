import React from 'react'

export default function Buttons(props) {
    return (
        <div>
            <button className="btn" onClick={props.callback}>{props.value}</button>
        </div>
    )
}

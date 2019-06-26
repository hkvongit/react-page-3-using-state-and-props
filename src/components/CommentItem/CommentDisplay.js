import React from 'react'

export default function CommentDisplay(props) {
    return (
        <div>
            Previous Comment :
            <span>{props.displayComment}</span>
        </div>
    )
}

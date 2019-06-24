import React from 'react'



export default function NavBar(props) {
    return (
        <div>
            <h1 className="heading">{props.title} 
                <button className="home" onClick={()=>props.callback()}>Home</button>
            </h1>
        </div>
    )
}

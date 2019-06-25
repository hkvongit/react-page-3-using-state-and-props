import React, { Component } from 'react'
import NavBar from "./elements/NavBar"
import Content from  "./elements/Content"
import Buttons from "./elements/Buttons"


const initialState={
    title:"React JS",
    content:"This is the description of ReactJS. You can add some relavant points regarding ReactJS,such as what it is, how it all began, what is the current state etc. This text is just pointer only,Its upto you to fill it up this space",
    bVisible:"b2" 
}

export default class ButtNav extends Component {
    state=initialState

    HOME=()=>{
        this.setState(initialState)
    }
    
    JSX=()=>{
        this.setState({
            title:"JSX",
            content:"JSX (JavaScript XML) is an extension to the JavaScript language syntax. Similar in appearance to HTML, JSX provides a way to structure component rendering using syntax familiar to many developers. React components are typically written using JSX, although they do not have to be (components may also be written in pure JavaScript). JSX is similar to another extension syntax created by Facebook for PHP, XHP.",
            bVisible:"b1"
        })
    }
    JS=()=>{
        this.setState({
            title:"Javascript library",
            content:"React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded. However, fetching data is only the beginning of what happens on a web page, which is why complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API.",
            bVisible:"b1"
        })
    }
    VDOM=()=>{
        this.setState({
            title:"Virtual DOM",
            content:"Another notable feature is the use of a virtual DOM. React creates an in-memory data-structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently. This allows the programmer to write code as if the entire page is rendered on each change, while the React libraries only render subcomponents that actually change.",
            bVisible:"b1"
        })
    }
    parentFunction = () => {
        this.setState(initialState)
        }
    render() {
        return (
            <div className="large_body">
                <NavBar title={this.state.title}  callback={this.parentFunction}/>
                
                <Content
                     content={this.state.content}
                />
                <br/>
                <p id="stretch" className={this.state.bVisible}>Core Concepts</p>
                <div  className={this.state.bVisible}>
                    <Buttons callback={this.JSX} value="JSX"></Buttons>
                    <Buttons callback={this.JS} value="Javascript Library"></Buttons>
                    <Buttons callback={this.VDOM}value="Virtual DOM"></Buttons>
                    {/* <button className="btn" onClick={this.JSX}>JSX</button>
                    <button className="btn" onClick={this.JS}>Javascript library</button>
                    <button className="btn" onClick={this.VDOM}>Virtual DOM</button> */}
                </div>
            </div>

        )
    }
}

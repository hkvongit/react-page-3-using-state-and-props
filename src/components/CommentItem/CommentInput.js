import React, { Component } from 'react'
import './CommentInput.css';
import CommentDisplay from "./CommentDisplay"

export default class CommentInput extends Component {
    constructor(props){
        super(props)
        this.state={
            comment:"hi stays",
        }
    }

    handleInputChange=(event)=>{
        this.setState({
            comment:event.target.value,
            letter:null,
            wordCount:null

        })
        this.wordCountFunc()
        this.letterCount()
    }

    handleFormSubmit=(event)=>{
        event.preventDefault()
        this.setState({
            commentpass:this.state.comment,
        })
        console.log(this.state.comment)
    }

    wordCountFunc=()=>{
        this.setState({
            wordCount:this.state.comment.split(" ").length
        })
    }
    
    letterCount=()=>{
        this.setState({
            letters:this.state.comment.length,
        }) 
    }

    render() {
        return (
            <div className="large_body">
                <form onSubmit={this.handleFormSubmit}>
                    <label>
                        Lets do some counting !<br/><br/>
                        <textarea 
                            type="textarea"  
                            className="inputBox" 
                            placeholder="This is a sample input." 
                            onChange={this.handleInputChange}
                        />
                        <p>Your input contains {this.state.wordCount} words and {this.state.letters} characters</p>
                        <button type="submit">Submit</button>
                    </label>
                </form>

                <CommentDisplay displayComment={this.state.commentpass}/>
                
            </div>
        )
    }
}

import React, { Component } from 'react'
import './CommentInput.css';
import CommentDisplay from "./CommentDisplay"

export default class CommentInput extends Component {
    constructor(props){
        super(props)
        this.state={
            comment:"",
        }
    }

    handleInputChange=(event)=>{
        this.setState({
            comment:event.target.value,
            letter:null,
            wordCount:null
        })

    }

    handleFormSubmit=(event)=>{
        event.preventDefault()
        this.setState({
            commentpass:this.state.comment,
        })
        console.log(this.state.comment)
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
                            value={this.state.comment}
                            onChange={this.handleInputChange}
                        />
                        <p>Your input contains {this.state.comment.split(" ").length} words and {this.state.comment.length} characters</p>
                        <button type="submit">Submit</button>
                    </label>
                </form>

                <CommentDisplay displayComment={this.state.commentpass}/>
                
            </div>
        )
    }
}

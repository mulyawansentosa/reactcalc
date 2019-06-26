import React, { Component } from "react";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";

class Title extends Component{
    constructor(props){
        super();
        this.state      = {
            title: props.title
        }
    }

    changeTitle(event){
        this.setState({
            title: event.target.value
        });
        this.props.eventTitle(event.target.value);
    }

    render(){
        return <div>
            <form ref="calcForm" class="form-control">
                <div className="form-group">
                    <input type="text" ref="display" className="form-control" placeholder="Type to change title" onChange={(event) => this.changeTitle(event)} value={this.state.title}/>
                </div>
            </form>
        </div>        
    }
}

export default Title;
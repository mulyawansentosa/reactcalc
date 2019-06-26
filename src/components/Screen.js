import React, { Component } from "react";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";

class Screen extends Component{
    render(){
        return <div>
            <form ref="calcForm" class="form-control">
                <div className="form-group">
                    <input type="text" ref="display" className="form-control" placeholder="0" value={this.props.text} disabled/>
                </div>
            </form>
        </div>        
    }
}

export default Screen;
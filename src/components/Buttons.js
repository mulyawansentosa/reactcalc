import React from "react";
import { Button } from "react-mdl";
import Screen from "./Screen";

class Buttons extends React.Component{

    render(){
        return <div>
            <div>
                <Button style={{height: "75px",width: "24.25%", marginRight: "1%", marginTop: "1%"}} raised colored onClick={this.props.no1.bind(this)}>1</Button>
                <Button style={{height: "75px",width: "24.25%", marginRight: "1%", marginTop: "1%"}} raised colored onClick={this.props.no2.bind(this)}>2</Button>
                <Button style={{height: "75px",width: "24.25%", marginRight: "1%", marginTop: "1%"}} raised colored onClick={this.props.no3.bind(this)}>3</Button>
                <Button style={{height: "75px",width: "24.25%", marginTop: "1%"}} raised colored onClick={this.props.opDiv.bind(this)}>/</Button>
            </div>
            <div>
                <Button style={{height: "75px",width: "24.25%", marginRight: "1%", marginTop: "1%"}} raised colored onClick={this.props.no4.bind(this)}>4</Button>
                <Button style={{height: "75px",width: "24.25%", marginRight: "1%", marginTop: "1%"}} raised colored onClick={this.props.no5.bind(this)}>5</Button>
                <Button style={{height: "75px",width: "24.25%", marginRight: "1%", marginTop: "1%"}} raised colored onClick={this.props.no6.bind(this)}>6</Button>
                <Button style={{height: "75px",width: "24.25%", marginTop: "1%"}} raised colored onClick={this.props.opMul.bind(this)}>X</Button>
            </div>
            <div>
                <Button style={{height: "75px",width: "24.25%", marginRight: "1%", marginTop: "1%"}} raised colored onClick={this.props.no7.bind(this)}>7</Button>
                <Button style={{height: "75px",width: "24.25%", marginRight: "1%", marginTop: "1%"}} raised colored onClick={this.props.no8.bind(this)}>8</Button>
                <Button style={{height: "75px",width: "24.25%", marginRight: "1%", marginTop: "1%"}} raised colored onClick={this.props.no9.bind(this)}>9</Button>
                <Button style={{height: "75px",width: "24.25%", marginTop: "1%"}} raised colored onClick={this.props.opMin.bind(this)}>-</Button>
            </div>
            <div>
                <Button style={{height: "75px",width: "24.25%", marginRight: "1%", marginTop: "1%"}} raised colored onClick={this.props.no0.bind(this)}>0</Button>
                <Button style={{height: "75px",width: "24.25%", marginRight: "1%", marginTop: "1%"}} raised colored onClick={this.props.clear.bind(this)}>Clear</Button>
                <Button style={{height: "75px",width: "24.25%", marginRight: "1%", marginTop: "1%"}} raised colored onClick={this.props.calc.bind(this)}>=</Button>
                <Button style={{height: "75px",width: "24.25%", marginTop: "1%"}} raised colored onClick={this.props.opPlus.bind(this)}>+</Button>
            </div>
        </div>
    }
}

export default Buttons;
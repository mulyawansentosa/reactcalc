import React from 'react';
import './App.css';
import Screen from "./components/Screen";
import Buttons from "./components/Buttons";
import Title from "./components/Title";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import {Layout, Header, Navigation, Content} from "react-mdl";

class App extends React.Component{
  constructor(){
    super();
    this.state   = {
      text: 0,
      savedNumber: 0,
      number: 0,
      operation: '',
      title: 'React Calculator'
    }
  }

  no1 = () => {
    if(this.state.number == 0){
      this.state.number = '';
    }
    this.state.number = this.state.number+'1';
    this.setState({text: this.state.number});
  }

  no2 = () => {
    if(this.state.number == 0){
      this.state.number = '';
    }
    this.state.number = this.state.number+'2';
    this.setState({text: this.state.number});
  }

  no3 = () => {
    if(this.state.number == 0){
      this.state.number = '';
    }
    this.state.number = this.state.number+'3';
    this.setState({text: this.state.number});
  }

  no4 = () => {
    if(this.state.number == 0){
      this.state.number = '';
    }
    this.state.number = this.state.number+'4';
    this.setState({text: this.state.number});
  }

  no5 = () => {
    if(this.state.number == 0){
      this.state.number = '';
    }
    this.state.number = this.state.number+'5';
    this.setState({text: this.state.number});
  }

  no6 = () => {
    if(this.state.number == 0){
      this.state.number = '';
    }
    this.state.number = this.state.number+'6';
    this.setState({text: this.state.number});
  }

  no7 = () => {
    if(this.state.number == 0){
      this.state.number = '';
    }
    this.state.number = this.state.number+'7';
    this.setState({text: this.state.number});
  }

  no8 = () => {
    if(this.state.number == 0){
      this.state.number = '';
    }
    this.state.number = this.state.number+'8';
    this.setState({text: this.state.number});
  }

  no9 = () => {
    if(this.state.number == 0){
      this.state.number = '';
    }
    this.state.number = this.state.number+'9';
    this.setState({text: this.state.number});
  }

  no0 = () => {
    if(this.state.number == 0){
      this.state.number = '';
    }
    this.state.number = this.state.number+'0';
    this.setState({text: this.state.number});
  }

  opPlus = () => {
    this.state.savedNumber  = this.state.number;
    this.state.operation    = '+';
    this.state.number       = 0;
    this.setState({text: 0});
  }

  opMin = () => {
    this.state.savedNumber  = this.state.number;
    this.state.operation    = '-';
    this.state.number       = 0;
    this.setState({text: 0});
  }

  opMul = () => {
    this.state.savedNumber  = this.state.number;
    this.state.operation    = 'X';
    this.state.number       = 0;
    this.setState({text: 0});
  }

  opDiv = () => {
    this.state.savedNumber  = this.state.number;
    this.state.operation    = '/';
    this.state.number       = 0;
    this.setState({text: 0});
  }

  clear(){
    this.setState(
      {
        text: 0,
        savedNumber: 0,
        number: 0,
        operation: ''  
      }
    );
  }
  calc = () => {
    let result  = 0;
    if(this.state.operation == '+'){
      result      = eval(this.state.savedNumber) + eval(this.state.number);
    }
    if(this.state.operation == '-'){
      result      = eval(this.state.savedNumber) + eval(this.state.number);
    }
    if(this.state.operation == 'X'){
      result      = eval(this.state.savedNumber) * eval(this.state.number);
    }
    if(this.state.operation == '/'){
      result      = eval(this.state.savedNumber) / eval(this.state.number);
    }

    this.state.savedNumber  = result;
    this.state.number       = result;
    this.setState({text: this.state.savedNumber});
  }

  changeTitle(res){
    this.setState({
      title: res
    });
  }

  render(){
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title={this.state.title}>
          </Header>
          <Content>
            <div className="conteiner" style={{padding: "20px"}}>
              <div>
                <Screen text={this.state.text}/>
              </div>
              <div>
                <Buttons 
                  no1={this.no1.bind(this)}
                  no2={this.no2.bind(this)}
                  no3={this.no3.bind(this)}
                  no4={this.no4.bind(this)}
                  no5={this.no5.bind(this)}
                  no6={this.no6.bind(this)}
                  no7={this.no7.bind(this)}
                  no8={this.no8.bind(this)}
                  no9={this.no9.bind(this)}
                  no0={this.no0.bind(this)}
                  opPlus={this.opPlus.bind(this)}
                  opMin={this.opMin.bind(this)}
                  opMul={this.opMul.bind(this)}
                  opDiv={this.opDiv.bind(this)}
                  calc={this.calc.bind(this)}
                  clear={this.clear.bind(this)}
                />
              </div>
              <div>
                <Title eventTitle={this.changeTitle.bind(this)} title={this.state.title}/>                
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    );  
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      color     : 'red',
      fontSize  : 15
    };
    this.onSetColor = this.onSetColor.bind(this);
    this.onSetSize  = this.onSetSize.bind(this);
    this.onReset    = this.onReset.bind(this);
  }

  onSetColor(responses){
    this.setState({
      color : responses
    });
  }

  onSetSize(responses){
    this.setState({
      fontSize : responses
    });
  }

  onReset(responses){
    this.setState({
      color     : 'red',
      fontSize  : 15
    });
  }

  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting size={this.state.fontSize} onReceiveSize={this.onSetSize}/>
            <Reset onReceiveReset={this.onReset}/>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Result resultColor={this.state.color} resultFontSize={this.state.fontSize}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

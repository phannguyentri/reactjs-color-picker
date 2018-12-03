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
  }

  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <ColorPicker color={this.state.color} />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting/>
            <Reset/>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Result/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';

class Reset extends Component {

  onReset(){
    this.props.onReceiveReset('z');
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={() => {this.onReset()}}>reset</button>
      </div>
    );
  }
}

export default Reset;
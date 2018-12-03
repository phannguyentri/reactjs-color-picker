import React, {Component} from 'react';

class Result extends Component {
  render() {
    return (
      <div>
        <p>Color : {this.props.resultColor} - Fontsize : 12px</p>
        <div id="content" style={{color: 'blue', fontSize: '12px'}}>Nội dung setting</div>
      </div>
    );
  }
}

export default Result;
import React, {Component} from 'react';

class Result extends Component {

  setStyle(){
    return {
      color     : this.props.resultColor,
      fontSize  : this.props.resultFontSize
    };
  }

  render() {
    return (
      <div>
        <p>Color : {this.props.resultColor} - Fontsize : {this.props.resultFontSize}px</p>
        <div id="content" style={this.setStyle()}>Nội dung setting</div>
      </div>
    );
  }
}

export default Result;
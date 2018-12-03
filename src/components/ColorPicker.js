import React, {Component} from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color : ['red', 'blue', 'green', '#ccc']
    };
  }

  showColor(color){
    return {backgroundColor : color}
  }

  setActiveColor(color){
    this.props.onReceiveColor(color);
  }

  render() {
    let elementColor = this.state.color.map((color, index) => {
      return <span
        key={index}
        style={this.showColor(color)}
        className={color === this.props.color ? 'active' : ''}
        onClick={() => {this.setActiveColor(color)} }
      />
    });

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Color Picker</h3>
        </div>
        <div className="panel-body">
          {elementColor}
          <hr />
        </div>
      </div>
    );
  }
}

export default ColorPicker;
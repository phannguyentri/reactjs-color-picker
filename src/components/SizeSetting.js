import React, {Component} from 'react';

class SizeSetting extends Component {

  onChangeSize(option = true){
    let resultSize = option ? this.props.size + 1 : this.props.size - 1;
    this.props.onReceiveSize(resultSize);
  }

  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Size : {this.props.size}px</h3>
        </div>
        <div className="panel-body">
          <button type="button" className="btn btn-success" onClick={() => {this.onChangeSize(false)}}>Giảm</button>&nbsp;
          <button type="button" className="btn btn-success" onClick={() => {this.onChangeSize()}}>Tăng</button>
        </div>
      </div>
    );
  }
}

export default SizeSetting;
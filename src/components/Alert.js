import React, {Component} from 'react';

class Alert extends Component {
  render() {
    return(
      <div className="alert alert-success" role="alert">
        Welcome!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">x</button>
      </div>
    );
  }
}

export default Alert;

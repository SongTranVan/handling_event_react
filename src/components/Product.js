import React, {Component} from 'react';
import '../App.css';
import '../assets/Product.css';

class Product extends Component {
  constructor(props) {
    super(props);
    this.ApplyJob = this.ApplyJob.bind(this);
  }

  ApplyJob() {
    alert('Applied ' + this.props.jobname);
  }
  render() {
    return(
      <div className="col-sm-3 card-margin">
        <div className="card">
          <img className="card-img-top" src={this.props.imgsrc} style={{width: 120+'px', height: 120+'px'}} alt={this.props.jobname} />
          <div className="card-body">
            <h5 className="card-title">{this.props.jobname}</h5>
            <p className="card-text">{this.props.salary}</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            <button className="btn btn-outline-danger" onClick={this.ApplyJob}>Apply now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;

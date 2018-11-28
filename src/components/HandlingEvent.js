import React, { Component } from 'react';

class HandlingEvent extends Component {
  constructor(props) {
    super(props);
    this.state = { fname: '', lname: '', name: '', status: false};
    this.handleChangeFName = this.handleChangeFName.bind(this);
    this.handleChangeLName = this.handleChangeLName.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusNonActive = this.changeStatusNonActive.bind(this);
  }

  handleChangeFName(e) {
    this.setState({fname: e.target.value});
  }

  handleChangeLName(e) {
    this.setState({lname: e.target.value});
  }

  handleClick(e) {
    var fullname = 'Welcome ' + this.state.fname + ' ' + this.state.lname + '!';
    this.setState({name: fullname});
  }

  changeStatus(e) {
    this.setState({status: true});
  }

  changeStatusNonActive(e) {
    this.setState({status: false});
  }

  checkActived(user) {
    if (user.status){
      return "  Actived";
    }
  }

  render() {
    var user = {
      name: this.state.name,
      status: this.state.status
    };

    var users= [
      {id: 1,name: 'Song Tran Van',age: 20},
      {id: 2,name: 'Trong Ngoc Be',age: 21,},
      {id: 3,name: 'Son Duc Cao',age: 20}
    ];

    var elements = users.map((us) => {
      return <div key={us.id}>
              <h3>Name: {us.name}, Age: {us.age}</h3>
             </div>
    });

    return (
      <div className="container">
          <div className="form-group">
            <label htmlFor="exampleInputFName">First Name</label>
            <input type="text" value={this.state.fname} onChange={this.handleChangeFName} className="form-control" id="exampleInputName" placeholder="Enter your First name" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputLName">Last Name</label>
            <input type="text" value={this.state.lname} onChange={this.handleChangeLName} className="form-control" id="exampleInputName" placeholder="Enter your Last name" />
          </div>
          <input type="submit" value="Submit" onClick={this.handleClick} className="btn btn-outline-primary" />
          <hr />
          <h3>{this.state.name}{this.checkActived(user)}</h3>
          <input type="submit" value="Active" onClick={this.changeStatus} className="btn btn-outline-danger" />
          <input type="submit" value="Non-Active" onClick={this.changeStatusNonActive} className="btn btn-outline-danger" />
          <br />
          <hr />
          {elements}
      </div>
  );
  }
}

export default HandlingEvent;

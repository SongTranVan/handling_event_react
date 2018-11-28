import React, {Component} from 'react';
import Product from './Product';
import Alert from './Alert';
import '../assets/Product.css';

class LearnProps extends Component {
  render() {
    var jobs = [
      {
        id: 1,
        jobname: "Ruby On Rails Dev",
        salary: "1500$",
        imgsrc: "https://iblinfotech.com/wp-content/uploads/2018/01/rails-logo-300x225.jpg",
        status: true
      },
      {
        id: 2,
        jobname: "PHP Laravel Dev",
        salary: "1000$",
        imgsrc: "https://www.tesark.com/wp-content/uploads/2014/11/laravel-logo.png",
        status: true
      },
      {
        id: 3,
        imgsrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
        jobname: "ReactJS Dev",
        salary: "2200$",
        status: true
      },
      {
        id: 4,
        imgsrc: "https://vuejs.org/images/logo.png",
        jobname: "VueJS Dev",
        salary: "2200$",
        status: true
      },
      {
        id: 5,
        imgsrc: "https://vuejs.org/images/logo.png",
        jobname: "VueJS Dev",
        salary: "2200$",
        status: true
      },
      {
        id: 6,
        imgsrc: "https://vuejs.org/images/logo.png",
        jobname: "VueJS Dev",
        salary: "2200$",
        status: true
      },
      {
        id: 7,
        imgsrc: "https://vuejs.org/images/logo.png",
        jobname: "VueJS Dev",
        salary: "2200$",
        status: true
      },
      {
        id: 8,
        imgsrc: "https://vuejs.org/images/logo.png",
        jobname: "VueJS Dev",
        salary: "2200$",
        status: true
      },
      {
        id: 9,
        imgsrc: "https://vuejs.org/images/logo.png",
        jobname: "VueJS Dev",
        salary: "2200$",
        status: false
      }
    ];

    let elements = jobs.map(job => {
      let result = '';
      if (job.status) {
        result = <Product
                  key = {job.id}
                  jobname = {job.jobname}
                  salary = {job.salary}
                  imgsrc = {job.imgsrc}
                  />
      }
      return result;
    })
    return(
      <div>
        <Alert />
        <div className="container">
          <div className="row card-margin">
            { elements }
          </div>
        </div>
      </div>
    );
  }
}

export default LearnProps;

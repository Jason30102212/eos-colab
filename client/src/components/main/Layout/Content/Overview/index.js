import React, { Component } from 'react';
import MailOverview from './MailOverview';
import MyProjectsOverview from './MyProjectsOverview';

import '../../../main.css';

class Overview extends Component {

  constructor() {
    super();
    this.state = {
      messages: '10'
    }
  }

  render() {
    return(
      <div>
        <h1>Overview</h1>
        <div className='row'>
          <div className='col-md-3'>
            <MailOverview messages={this.state.messages}/>
          </div>
          <div className='col-md-9'>
            <MyProjectsOverview />
          </div>
        </div>
      </div>
    )
  }
}

export default Overview;

import React from "react";

import './mail-overview.css';

const MailOverview = (props) => {
  return (
    <div className='mail-overview-div'>
      <i className="fas fa-envelope icon-lg" />
      <div className=''>
        Messages: {props.messages}
      </div>
    </div>
  )
}

export default MailOverview;

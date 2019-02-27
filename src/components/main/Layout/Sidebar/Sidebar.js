import React, { Component } from 'react';
import { setCurrentContent } from '../../../../actions/navigationActions';
import { connect } from 'react-redux';

import '../../main.css';

class Sidebar extends Component {


  render() {
    return(
      <div className="wrapper">
         <nav id="sidebar">
             <div className="sidebar-header">
                 <h3>Bootstrap Sidebar</h3>
             </div>

             <div className="list-unstyled li-padding components">
                <p>Dummy Heading</p>
                <div className='sidebar-nav-button' value='home' onClick={() => this.props.setCurrentContent("home")}>
                  Home
                </div>
                <div className='sidebar-nav-button' onClick={() => this.props.setCurrentContent("messages")}>
                  Messages
                </div>
                <div className='sidebar-nav-button' onClick={() => this.props.setCurrentContent("myprofile")}>
                  My Profile
                </div>
                <div className='sidebar-nav-button' onClick={() => this.props.setCurrentContent("myprojects")}>
                  My Projects
                </div>
                <div className='sidebar-nav-button' onClick={() => this.props.setCurrentContent("exchange")}>
                  Exchange
                </div>
                <div className='sidebar-nav-button' onClick={() => this.props.setCurrentContent("store")}>
                  Store
                 </div>
             </div>
         </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {setCurrentContent} )(Sidebar);

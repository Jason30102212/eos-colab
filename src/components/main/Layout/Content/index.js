import React, { Component } from 'react';
import { connect } from 'react-redux';
import Overview from './Overview';
import ContentHome from './ContentHome';
import Messages from './Messages';
import MyProfile from './MyProfile';
import MyProjects from './MyProjects';
import Exchange from './Exchange';
import Store from './Store';

import { setCurrentContent } from '../../../../actions/navigationActions';

import '../../main.css';

class Content extends Component {

  getContent = () => {
    const { currentContent } = this.props.navigation

    if (currentContent === "overview") {
      return(
        <Overview />
      )
    } else if (currentContent === "messages") {
      return(
        <Messages />
      )
    } else if (currentContent === "myprofile") {
      return (
        <MyProfile />
      )
    } else if (currentContent === "myprojects") {
      return (
        <MyProjects />
      )
    } else if (currentContent === "exchange") {
      return (
        <Exchange />
      )
    } else if (currentContent === "store") {
      return (
        <Store />
      )
    }
  }

  render() {
    return(
      <div className='wrapper'>
        <nav id='sidebar'>
          <div className="sidebar-header">
              <h3 className='sidebar-title-heading'>EOS COLAB</h3>
          </div>

          <div className="list-unstyled li-padding components">
             <p className='sidebar-menu-heading'>MENU</p>
             <div className='sidebar-nav-button' value='home' onClick={() => this.props.setCurrentContent("overview")}>
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
        <div id='content'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
              <button type='button' id='sidebarCollapse' className='btn btn-info'>
                <i className='fas fa-align-left'></i>
                <span>Toggle Sidebar</span>
              </button>
            </div>
          </nav>
          <div className='content-div'>
            {this.getContent()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  navigation: state.navigation
})

export default connect(mapStateToProps, {setCurrentContent})(Content);

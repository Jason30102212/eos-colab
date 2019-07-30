import React, { Component } from 'react';
import { connect } from 'react-redux';
import Overview from './Overview';
import Messages from './Messages';
import MyProfile from './MyProfile';
import MyProjects from './MyProjects';
import Exchange from './Exchange';
import Store from './Store';


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
      <div className='content-wrapper'>
        { this.getContent() }
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  navigation: state.navigation
})

export default connect(mapStateToProps)(Content);

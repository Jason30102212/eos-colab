import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs2';
import Eos from 'eosjs';

import { connect } from 'react-redux';
import {
  scatterLogin,
  scatterLogout
} from '../../../actions/scatterActions';


class Home extends Component {

  componentDidMount() {
    if(this.props.scatter.isScatterActivated){
      this.props.history.push('/interface');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.scatter.isScatterActivated) {
      this.props.history.push('/interface');
    }
  }

  scatterSplash = () => {

    const network = {
        blockchain:'eos',
        protocol:'https',
        host:'http://localhost',
        port:8888,
        chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
    }

    ScatterJS.plugins(new ScatterEOS());

    ScatterJS.scatter.connect("eos-colab").then(connected => {
      // User does not have Scatter Desktop, Mobile or Classic installed.
      if(!connected) return false;

      const scatter = ScatterJS.scatter;

      // Now we need to get an identity from the user.
      // We're also going to require an account that is connected to the network we're using
      const requireFields = { accounts:[network] };
      scatter.getIdentity(requireFields).then(() => {

        // Always use the accounts you got back from Scatter. Never hardcode them even if you are prompting
        // the user for their account name beforehand. They could still give you a different account.
        const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');

        // You can pass any additional options you want into the eosjs reference.
        const eosOptions = { expireInSeconds:60 };

        // Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter
        const eos = scatter.eos(network, Eos, eosOptions);


      }).catch(error => {
        console.log(error);
      })

      window.ScatterJS = null;
    })
  }

  render() {
    this.scatterSplash();
    return(
      <div>
        <h1>Home</h1>
        <button src="" onClick={this.props.scatterLogin}>
          Scatter Login
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  scatter: state.scatter
});

export default connect(mapStateToProps, { scatterLogin, scatterLogout })(Home);

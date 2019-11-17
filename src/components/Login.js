import React, { useState } from 'react';
import { navigate } from "hookrouter";  
import { bindActionCreators } from "redux"
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login';

import { clientID } from '../config';
import { setToken } from '../redux';


const Login = (props) => {
    const responseGoogle = (response) => {
        debugger;
        props.setToken(response.accessToken);
        navigate('/album');
    }
    

    return (
        <GoogleLogin
            clientId={clientID}
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
};
const mapStateToProps = state => {
    return {
        photo: state.photo
    }
  }
  const mapDispatchToProps = dispatch => ({
    setToken: token => dispatch(setToken(token))
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
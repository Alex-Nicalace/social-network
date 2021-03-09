import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isWasQuery: state.auth.isWasQuery,
    }
}

export const withAuthRedirect = (Component) => {

    class AuthRedirect extends React.Component {
        render() {
            debugger
            if (this.props.isWasQuery && !this.props.isAuth) return <Redirect to="/login"/>

            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropsForRedirect)(AuthRedirect);
}
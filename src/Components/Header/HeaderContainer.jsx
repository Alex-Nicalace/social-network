import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getMe} from "../../Redux/auth-reducer";

class HeaderApi extends React.Component {

    componentDidMount() {

        this.props.getMe();
    }

    render() {
        debugger;
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth}/>
        )

    }
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching,
    }
}

//const HeaderContainer = connect(mapStateToProps, {setAuthUserData, toggleIsFetching})(HeaderApi);

export default connect(mapStateToProps, {getMe})(HeaderApi);
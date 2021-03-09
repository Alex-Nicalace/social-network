import React from "react";
import {connect} from "react-redux";
import {
    getProfile,
    SetPost,
    SetPostCurrent,
} from "../../Redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileApi extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId);
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        ProfilePage: state.ProfilePage,
    }
}

export default compose(
    connect(mapStateToProps, {SetPost, SetPostCurrent, getProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileApi)
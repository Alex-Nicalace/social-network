import React from "react";
import {connect} from "react-redux";
import {
    getProfile,
    SetPost,
    SetPostCurrent,
} from "../../Redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";

class ProfileApi extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId);
        // let idUser = this.props.match.params.userId;
        // if (!idUser) idUser = 2
        // profileAPI.getProfile(idUser).then(data => {
        //     this.props.SetProfile(data);
        // })
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

let WithUrlDataContainer = withRouter(ProfileApi);

const ProfileContainer = connect(mapStateToProps, {SetPost, SetPostCurrent, getProfile})(WithUrlDataContainer)

export default ProfileContainer
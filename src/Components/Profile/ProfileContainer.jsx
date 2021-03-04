import React from "react";
import {connect} from "react-redux";
import {
    SetPost,
    SetPostCurrent,
    SetProfile
} from "../../Redux/profile-reducer";
import * as axios from "axios";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";

class ProfileApi extends React.Component {
    componentDidMount() {
        let idUser = this.props.match.params.userId;
        if (!idUser) idUser = 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${idUser}`).then(response => {
            debugger;
            this.props.SetProfile(response.data);
        });
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

const ProfileContainer = connect(mapStateToProps, {SetPost, SetPostCurrent, SetProfile})(WithUrlDataContainer)

export default ProfileContainer
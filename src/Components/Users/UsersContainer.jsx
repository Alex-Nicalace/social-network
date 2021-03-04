import React from "react";
import {connect} from "react-redux";
import {followAC, setCountUserAC, setCurrentPageAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";
import * as axias from "axios";
import Users from "./Users";

class UsersAPI extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axias.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.sizePage}&page=${this.props.currentPage}`).then(response => {
            this.props.on_setUsersAC(response.data.items);
            this.props.setCountUser(response.data.totalCount);
        });
    }

    OnSetCurrentPage = (numPage) => {
        this.props.setCurrentPage(numPage);

        axias.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.sizePage}&page=${numPage}`).then(response => {
            this.props.on_setUsersAC(response.data.items);
        })
    }

    render() {
        return (
            <Users items={this.props.items} on_unfollow={this.props.on_unfollow} on_follow={this.props.on_follow}
                   countUser={this.props.countUser} sizePage={this.props.sizePage}
                   OnSetCurrentPage={this.OnSetCurrentPage} currentPage={this.props.currentPage}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        items: state.UsersPage.items,
        countUser: state.UsersPage.countUser,
        sizePage: state.UsersPage.sizePage,
        currentPage: state.UsersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    debugger
    return {
        on_follow: (id) => {
            let action = followAC(id);
            dispatch(action);
        },
        on_unfollow: (id) => {
            let action = unfollowAC(id);
            dispatch(action);
        },
        on_setUsersAC: (items) => {
            let action = setUsersAC(items);
            dispatch(action);
        },
        setCurrentPage: (numPage) => {
            dispatch(setCurrentPageAC(numPage))
        },
        setCountUser: (count) => {
            dispatch(setCountUserAC(count))
        },
    }

}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UsersContainer;
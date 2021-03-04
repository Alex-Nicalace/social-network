import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCountUser,
    setCurrentPage,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloading from "../Common/Preloading/Preloading";

class UsersAPI extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.sizePage}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setCountUser(response.data.totalCount);
            this.props.toggleIsFetching(false);
        });
    }

    OnSetCurrentPage = (numPage) => {
        this.props.setCurrentPage(numPage);
        this.props.toggleIsFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.sizePage}&page=${numPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetching(false);
        })
    }

    render() {
        return (
            <>
                {this.props.isFetching && <Preloading/>}
                <Users items={this.props.items} unfollow={this.props.unfollow} follow={this.props.follow}
                       countUser={this.props.countUser} sizePage={this.props.sizePage}
                       OnSetCurrentPage={this.OnSetCurrentPage} currentPage={this.props.currentPage}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        items: state.UsersPage.items,
        countUser: state.UsersPage.countUser,
        sizePage: state.UsersPage.sizePage,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         on_follow: (id) => {
//             let action = followAC(id);
//             dispatch(action);
//         },
//         on_unfollow: (id) => {
//             let action = unfollowAC(id);
//             dispatch(action);
//         },
//         on_setUsersAC: (items) => {
//             let action = setUsersAC(items);
//             dispatch(action);
//         },
//         setCurrentPage: (numPage) => {
//             dispatch(setCurrentPageAC(numPage))
//         },
//         setCountUser: (count) => {
//             dispatch(setCountUserAC(count))
//         },
//         toggleIsFetching: (IsFetching) => {
//             dispatch(toggleIsFetchingAC(IsFetching))
//         },
//
//     }
//
// }

// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);
const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setCountUser, toggleIsFetching,
})(UsersAPI);

export default UsersContainer;
import React from "react";
import {connect} from "react-redux";
import {
    deleteFollow,
    getUsers,
    setFollow,
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloading from "../Common/Preloading/Preloading";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class UsersAPI extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.sizePage, this.props.currentPage)
    }

    OnSetCurrentPage = (numPage) => {
        //this.props.setCurrentPage(numPage);
        this.props.getUsers(this.props.sizePage, numPage)
    }

    render() {
        return (
            <>
                {this.props.isFetching && <Preloading/>}
                <Users items={this.props.items}
                       countUser={this.props.countUser}
                       sizePage={this.props.sizePage}
                       OnSetCurrentPage={this.OnSetCurrentPage}
                       currentPage={this.props.currentPage}
                       followingInProgress={this.props.followingInProgress}
                       deleteFollow={this.props.deleteFollow}
                       setFollow={this.props.setFollow}/>
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
        followingInProgress: state.UsersPage.followingInProgress,
    }
}

// const UsersContainer = connect(mapStateToProps, {
//     getUsers,
//     deleteFollow,
//     setFollow
// })(withAuthRedirect(UsersAPI));

export default compose(connect(mapStateToProps, {
    getUsers,
    deleteFollow,
    setFollow
}), withAuthRedirect)(UsersAPI);
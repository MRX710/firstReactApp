import React from 'react';
import {connect} from "react-redux";
import Users from "./Users"
import {followAC, unfollowAC, setUsersAC, updateDefaultAC} from "../../Redux/users_reducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        updateDefault: () => {
            dispatch(updateDefaultAC());
        }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;

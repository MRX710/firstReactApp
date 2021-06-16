const FOLLOW = "follow";
const UNFOLLOW = "unfollow";
const SET_USERS = "setUsers";
const UPDATEDEFAULT = "updateDefault"

let initalState = {
    users: [

    ]
}

const usersReducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.id === u.id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.id === u.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case UPDATEDEFAULT:
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.id === u.id) {
                        return {...u};
                    }
                    return u;
                })
            }
        default:
            return state;

    }
}

export const followAC = (userId) => ({type: FOLLOW, userId, id: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, id: userId});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});
export const updateDefaultAC = () => ({type: UPDATEDEFAULT});

export default usersReducer;
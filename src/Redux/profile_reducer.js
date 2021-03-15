const ADD_POST = 'ADD-POST';
const updateTitleNewPost = 'updateTitleNewPost';
const updateTextNewPost = 'updateTextNewPost';

let initial_state =   {
    postData:
        [
            {id: 1, title: "My first Post", text: "Hey, it's my first post!", likeCount: 12},
            {id: 2, title: "My second Post", text: "Awesome, it's my second post!", likeCount: 7}
        ],
    newPost:
        {
            newPostTitle: '',
            newPostText: ''
        }
}

const profileReducer = (state = initial_state, action) => {
    switch (action.type){
        case ADD_POST:
            return{
                ...state,
                postData: [...state.postData, {
                    id: 5,
                    title: state.newPost.newPostTitle,
                    text: state.newPost.newPostText,
                    likeCount: 10
                }],
                newPost:{
                    newPostTitle:'',
                    newPostText:''
                }
            }
            // let newPost = {
            //     id: 5,
            //     title: state.newPost.newPostTitle,
            //     text: state.newPost.newPostText,
            //     likeCount: 10
            // };
            // state.postData.push(newPost);
            // state.newPost.newPostTitle = '';
            // state.newPost.newPostText = '';
            // return state;
        case updateTitleNewPost:
            return {
                ...state,
                newPost: {
                    ...state.newPost, newPostTitle: action.postTitle
                }
            }
        //     state.newPost.newPostTitle = action.postTitle;
        //     return state;
        case updateTextNewPost:
            return {
                ...state,
                newPost: {
                    ...state.newPost, newPostText: action.postText
                }
            }
            // state.newPost.newPostText = action.postText;
            // return state;
        default: return state;
    }
}

export const addPostCreater = () => ({type: ADD_POST});
export const updateTitleNewPostActionCreator = (title) => ({type: updateTitleNewPost, postTitle: title});
export const updateTextNewPostActionCreator = (text) => ({type: updateTextNewPost, postText: text});
export default profileReducer;
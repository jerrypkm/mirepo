const reducer = (state, action) => {
    switch (action.type){
        case 'LOGIN_REQUEST':
            return {
                ...state,
                userName: action.payload.userName,
                userID: action.payload.userID,
                loginState: true,
            }
        case 'REGISTER_REQUEST':
            return {
                ...state,
                userName: action.payload.userName,
                userID: action.payload.userID,
                userEmail: action.payload.userEmail,
                loginState: true,
            }
        default:
            return state;
    }
}

export default reducer;
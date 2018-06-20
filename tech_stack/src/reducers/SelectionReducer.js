export default (state = null, action) => {
    // if state is undefined then just set to null
    //return null; //so we dont get undefined

    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};

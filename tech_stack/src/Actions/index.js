export const selectLibrary = (libraryId) => {
    //a function returns actions that has a type property
    //tell reducer to update
    return {
        type: 'select_library',
        payload: libraryId
    };
};

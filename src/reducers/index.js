const reducer = (state, action) => {
    switch (action.type) {
        case 'PRINT_WORD':
            return {
                ...state,
                word: action.payload,
            } 
        default: 
            return state;
     }
}

export default reducer
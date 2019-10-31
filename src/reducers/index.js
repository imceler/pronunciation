const reducer = (state, action) => {
    switch (action.type) {
        case 'PRINT_WORD':
            return {
                ...state,
                word: action.payload,
            } 
        case 'VALIDATION':
            return {
                ...state,
                validation: action.payload,
            } 
        default: 
            return state;
     }
}

export default reducer
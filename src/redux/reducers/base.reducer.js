 export const baseReducer = (state = 0,action) => {
    console.log(state, action);
    switch (action.type) {
        case 'INC':
            return state += action.payload;

        case 'DEC':
            return --state;

        case 'reset':
            return 0;
            return state;

        default:
            return state;
    }

}
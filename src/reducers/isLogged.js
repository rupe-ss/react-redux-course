const isLogged = (state = false, action) => {
    switch (action.type) {
        case 'SIGH_IN':
            return !state;
        default:
            return state;
    }
};

export default isLogged;

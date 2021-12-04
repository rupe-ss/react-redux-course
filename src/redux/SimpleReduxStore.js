//Defining Action, its just a function

//Action Increment
const increment = () => {
    return {
        type: 'INCREMENT', // Name of action
    };
};

//Action Decrement
const decrement = () => {
    return {
        type: 'DECREMENT', //Name of another action
    };
};

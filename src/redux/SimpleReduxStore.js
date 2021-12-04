import { createStore } from 'redux';

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

//Reducer is where we define all the action.
//Action is switch in reducer as well
//Reducer will tell which action to run
//We will initialize the state in reducer as well
//Reducer will take two parameters, one is state and another is action
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': //This increment is define in action above
            return state + 1;

        case 'DECREMENT':
            return state - 1;

        default: {
        }
    }
};

let store = createStore(counter);

//Displaying store in console
store.subscribe(() => console.log(store.getState()));

//DISPATCH
//We are executing a action
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

import { combineReducers, createStore } from "redux";

const initialState = {
  searchTerm: "", // Set the initial state for searchTerm    asdfasdf
};

function robotReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_ROBOT":
      return { ...state, searchTerm: action.payload }; //aslkdjfalsdjf
    default:
      return state;
  }
}

const loadingReducer = (state = true, action) => {
  if (action.type === "SEARCH_ROBOT") return true;
  if (action.type === "END_LOADING") return false;
  return state;
}


const rootReducer = combineReducers({
  robotReducer: robotReducer,
  loadingReducer: loadingReducer
});

export const store = createStore(rootReducer);


   
//2







// For debug purposes only
store.subscribe(() => console.log(store.getState()));





// The robotReducer function is a reducer function that takes two parameters: 
// state and action.

// The state parameter represents the current state of the Redux store, which is an 
// object with properties like searchTerm.

// The action parameter represents the action dispatched to the reducer. An action is 
// an object that must have a type property, and it can optionally have a payload 
// property.

// Inside the switch statement, the reducer checks the action.type to determine which 
// action is being dispatched. In this case, it looks for the action with the type 
// "SEARCH_ROBOT".

// When the "SEARCH_ROBOT" action is dispatched, the reducer creates a new state 
// object using the spread operator (...state). This ensures that the existing 
// state properties are retained in the new state object.

// The searchTerm property of the new state object is set to the action.payload. 
// This means that the new value for searchTerm comes from the payload property of 
// the dispatched action.


// For example, when you dispatch an action like this:

// dispatch({ type: "SEARCH_ROBOT", payload: "search term here" });

// The robotReducer will create a new state object with the updated searchTerm, like this:


// {
//     ...state,
//     searchTerm: "search term here",
//   }


// So, the action payload is the value of action.payload, and it is used to 
// define the new searchTerm value in the state when the "SEARCH_ROBOT" 
// action is dispatched.
  

//5
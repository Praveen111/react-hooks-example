const initialState = {count: 0};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
    console.log('COUNT:', state,action)
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    // default:
    //   // A reducer must always return a valid state.
    //   // Alternatively you can throw an error if an invalid action is dispatched.
    //   return state;
  }

  return state;
}


export default reducer;

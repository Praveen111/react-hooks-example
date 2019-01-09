

increment = () => {
    return {
      type: INCREMENT_COUNTER
    };
  }

incrementAsync = () => {
    return dispatch => {
    //   setTimeout(() => {
        // Yay! Can invoke sync or async actions with `dispatch`
        dispatch(increment());
    //   }, 1000);
    };
  }
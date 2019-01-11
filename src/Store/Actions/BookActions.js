import { INCREMENT } from "./constants";


const increment = () => {
    return {
      type: INCREMENT
    };
  }

const incrementAsync = () => {
    return dispatch => {
    //   setTimeout(() => {
        // Yay! Can invoke sync or async actions with `dispatch`
        dispatch(increment());
    //   }, 1000);
    };
  }


  export default incrementAsync;
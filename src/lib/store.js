import { useReducer } from 'react';

const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    case '':
      return { ...state };
    default:
      throw new Error('Invalid Action Type Provided');
  }
};

const useStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};

export default useStore;

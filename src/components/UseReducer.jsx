import PropTypes from 'prop-types';
import React, { useReducer } from 'react';

export default function UseReducer({}) {

  const initialState = {count:0}

  function reducer(state,action){
    switch(action.type){
      case 'increment':
        return {...state, count:state.count + 1};
      case 'decrease':
        return {...state, count:state.count - 1};
      case 'reset':
        return { ...initialState};
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Exercise Hook useReducer</h2><hr />
      <button onClick={() => dispatch({type: 'increment'})}>
          Increment
      </button>
      <button onClick={() => dispatch({type: 'decrease'})}>
          Decrease
      </button>
      <button onClick={() => dispatch({type: 'reset'})}>
          Reset
      </button>
      <p>Count is {state.count}</p>
    </div>
    
  )
};

UseReducer.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired
}
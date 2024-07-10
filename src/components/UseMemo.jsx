import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

export default function UseMemo( { count, setCount} ) {

  const doubledCount = useMemo(() => {
    return count * 2;
  },[count]);

  const handleSquare = () => {
    alert(`Square of count is: ${count*count}`)
  };

  return (
    <div>
      <h2>Exercise Hook useMemo</h2><hr />
      <button onClick={() => setCount(count+1)}>
        Increment
      </button>
      <button onClick={handleSquare}>
        Square of Count
      </button>
      <p>Count in {count}</p>
      <p>Double count is {doubledCount}</p>
    </div>
  )
}

UseMemo.propTypes ={
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired
}

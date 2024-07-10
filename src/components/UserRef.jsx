import PropTypes from 'prop-types';
import React, { useRef } from 'react';

export default function UserRef({ count, setCount}) {

  //Crear una referencia con una useRef para almacenar el elemento del DOM
  const countRef = useRef();

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    countRef.current.textContent = `Count is now ${newCount}`
  }

  const handleDoubleClick = () => {
    setCount(0);
    countRef.current.textContent = `Count is now 0`

  }

  return (
    <div>
      <h2>Exercise Hook useRef</h2><hr />
      <button onClick={handleClick} onDoubleClick={handleDoubleClick}>
        Increment</button>
      <p ref={countRef}>
        Count is {count}
      </p><hr />
    </div>
  )
}

UserRef.propTypes ={
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired
}

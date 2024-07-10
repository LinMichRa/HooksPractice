import { useEffect, useState } from 'react';
import './App.css';
import UseReducer from './components/UseReducer';
import UserRef from './components/UserRef';

function App() {
  const [count, setCount] = useState(0)

  //useEffect se ejecuta deespues de cada renderizado
  useEffect(() => {
    //Actualiza el titulo del documento con el count (pestaña de la página)
    document.title=`Count is ${count}`;
  }, [count]);

  return (
    <>
      <h1>React Hooks Practice</h1>
      <div className="card"><hr />
        <h2>Exercise Hook useState</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button><hr />
      </div>
      <UseReducer />
      <UserRef count ={count} setCount={setCount} />
    </>
  )
}

export default App

import { createStore } from 'redux';

const App = () => {
  const reducer = (state = {}, action) => state;

  const store = createStore(reducer);

  return <></>;
};

export default App;

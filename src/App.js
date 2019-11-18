import React from 'react';
import { TodoLayout } from '@todo';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
        <TodoLayout/>
    </Provider>
  );
}

export default App;




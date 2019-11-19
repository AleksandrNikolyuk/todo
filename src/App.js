import React from 'react';
import TodoLayout from 'app/components/TodoLayout';
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
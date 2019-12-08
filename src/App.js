import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import { CssBaseline } from '@material-ui/core';
import TodoLayout from 'app/components/TodoLayout';

function App() {
	return (
		<Provider store={store}>
			<React.Fragment>
				<CssBaseline/>
				<TodoLayout/>
			</React.Fragment>
		</Provider>
	);
}

export default App;
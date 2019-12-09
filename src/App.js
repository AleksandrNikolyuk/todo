import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import { CssBaseline } from '@material-ui/core';
import TodoLayout from 'app/components/TodoLayout';

function App() {
	return (
		<Provider store={store}>
			<Fragment>
				<CssBaseline/>
				<TodoLayout/>
			</Fragment>
		</Provider>
	);
}

export default App;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import {
	TodoImage,
} from '@todo';

const styles = () => ({
	root: {},
	list: {
		width: 'auto',
		display: 'flex',
		paddingBottom: '10px',
		marginBottom: '10px',
		flexDirection: 'column',
		borderBottom: '2px solid #eee',
	},
	item: {
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
	},
	text: {
		fontSize: '14px',
	}
});

class TodoListComments extends Component {
	render() {
		const { t, classes, comments, list } = this.props;
		console.log('comments', comments, list )
		return (
			<div className={classes.root}>
				{list.length !== 0 && list.map(item => {
					console.log('item',item)
				
					})
				}
				{/* <div className={classes.list}>
					{comments.map(item => (
						<div key={item.id} className={classes.item}>
							<TodoImage />
							<div className={classes.text}>{item.text}</div>
						</div>
					))}
				</div> */}
			 </div>
		);		
	}
}

TodoListComments.defaultProps = {
	classes: {},
	list: [],
	
};

TodoListComments.propTypes = {
	classes: PropTypes.object,
	list: PropTypes.array,
	t: PropTypes.func,
};

const mapStateToProps = state => ({
	...state.todos
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withStyles(styles, { withTheme: true })(TodoListComments)));

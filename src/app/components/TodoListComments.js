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
		marginTop: '20px',
		display: 'flex',
		paddingBottom: '10px',
		marginBottom: '10px',
		flexDirection: 'column',
		borderBottom: '2px solid #eee',
	},
	item: {
		marginTop: '20px',
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
	},
	text: {
		fontSize: '20px',
	}
});

class TodoListComments extends Component {
	render() {
		const { classes, comments } = this.props;
		return (
			<div className={classes.root}>
				{comments.length !== 0 && comments.map(item => {
					return (
						<div className={classes.list} key={item.id}>
							<div key={item.id} className={classes.item}>
								<TodoImage />
								<div className={classes.text}>{item.content}</div>
							</div>
						</div>
					)
				
					})
				}
				
			 </div>
		);		
	}
}

TodoListComments.defaultProps = {
	classes: {},
	comments: [],
};

TodoListComments.propTypes = {
	classes: PropTypes.object,
	comments: PropTypes.array,
	t: PropTypes.func,
};

const mapStateToProps = state => ({
	...state.items
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withStyles(styles, { withTheme: true })(TodoListComments)));

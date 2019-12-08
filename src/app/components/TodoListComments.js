import React, { Component } from 'react';
import ScrollArea from 'react-scrollbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import {
	TodoImage,
} from '@todo';

const styles = () => ({
	root: {
		paddingRight:'15px',
	},
	list: {
		width: 'auto',
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
		const { classes, comment, items } = this.props;
		return (
			<ScrollArea
				speed={0.8}
				horizontal={false}
			>
				<div className={classes.root}>
					{comment.length !== 0 && comment.map(item => {
						if (item.itemId[0] === items) {
							return (
								<div className={classes.list} key={item.id}>
									<div key={item.id} className={classes.item}>
										<TodoImage />
										<div className={classes.text}>{item.content}</div>
									</div>
								</div>
							)
						} else {return ''}	
					})}
				</div>
			</ScrollArea>
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
	...state.comments,
	...state.selected
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withStyles(styles, { withTheme: true })(TodoListComments)));

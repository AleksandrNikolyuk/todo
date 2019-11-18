import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TodoButton } from '@todo';

const styles = () => ({
	root: {},
	list: {},
	item: {},
	title: {},
});

class TodoListItem extends Component {
	render() {
		const { classes, list } = this.props;
		// console.log(list);
		return (
			<div className={classes.root}>
				{list.length !== 0 && list.map(item => {
					{/* {list[0] && list.map(item => { */
					}
					return (
						<div className={classes.list} key={item.id}>
							<div className={classes.item}>
								<div className={classes.title}>{item.title}</div>
								<span>
                                        {item.comments.length}
                                    </span>
								<TodoButton
									label={'Delete'}
									onClick={() => ({})}
								/>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

TodoListItem.defaultProps = {
	deleteItem: null,
	clickItem: null,
};

TodoListItem.propTypes = {
	classes: PropTypes.object,
	list: PropTypes.array.isRequired,
	deleteItem: PropTypes.func,
	clickItem: PropTypes.func,
};

export default withStyles(styles)(TodoListItem);
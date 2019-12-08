import React, { Component } from 'react';
import ScrollArea from 'react-scrollbar';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { 
	deletItem, 
	changeItem,
	// getData,
} from 'store/action';
import { TodoDelButton } from '@todo';

const styles = () => ({
	root: {
		listStyle: 'none',
		padding: '0 15px 0 10px'
	},
	list: {
		width: '100%',
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
	title: {
		paddingLeft: '10px',
		fontSize: '20px',
	},
	selectedUser: {
		borderLeft: '2px solid red',
		marginLeft: '-2px'
	},
	commentsCount: {
		background: '#87CEFA',
		marginLeft: '10px',
        padding: '3px 13px',
        color: 'white',
        borderRadius: '15px',
	},
});

class TodoListItem extends Component {

	// componentDidMount() {
	// 	this.props.getData()
	// };

	render() {
		const { t, classes, deletItem, changeItem, list, items, comment  } = this.props;
	
		return (
			<ScrollArea
				speed={0.8}
				horizontal={false}
            >
				<ul className={classes.root} >
					{list.length !== 0 && list.map(item => {
						const select = items === item.id ? classes.selectedUser : '';

						const commentsCount = comment.filter( comment => comment.itemId.some( id => id === item.id) );

						console.log('commentsCount', commentsCount )

						return (
							<li 
								className={classNames(classes.list, select)}
								key={item.id} 
								onClick={changeItem(item.id)}
							>
									<div className={classes.item}>
										<div className={classes.title}>
											{item.content}
											<span className={classes.commentsCount}>{commentsCount.length}</span>
										</div>
										<TodoDelButton
											label={t('buttons.delete')}
											clickHandler={deletItem(item.id)}
										/>
									</div>
							</li>
						);
					})}
				</ul>
			</ScrollArea>
		);
	}
}

TodoListItem.defaultProps = {
	classes: {},
	list: [],
	selectedUser: {},
	deletItem: () => {
	},
	changeItem: () => {
	},
};

TodoListItem.propTypes = {
	classes: PropTypes.object,
	list: PropTypes.array,
	clickHandler: PropTypes.func,
	t: PropTypes.func,
	deletItem: PropTypes.func,
	changeItem: PropTypes.func,
};

const mapStateToProps = state => ({
	...state.items,
	...state.selected,
	...state.comments,
});

const mapDispatchToProps = dispatch => ({

	deletItem: (id) => () => {
		dispatch(deletItem(id))
	},

	changeItem: (id) => () => {
		dispatch(changeItem(id))
	},
	// getData: ()  => {
	// 	dispatch(getData())
	// }
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withStyles(styles, { withTheme: true })(TodoListItem)));

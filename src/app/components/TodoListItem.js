import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TodoButton } from '@todo';
import { withTranslation } from "react-i18next";

const styles = () => ({
	root: {},
	list: {},
	item: {},
	title: {},
});

class TodoListItem extends Component {
	render() {
		const { classes, list, t } = this.props;
		return (
			<div className={classes.root}>
				{/* {list.length !== 0 && list.map(item => { */}
					{/* {list[0] && list.map(item => { */
					}
					{/* return ( */}
						<div className={classes.list}>
							<div className={classes.item}>
								<div className={classes.title}></div>
								
								<TodoButton
									label={t('buttons.delete')}
									onClick={() => ({})}
								/>
							</div>
						</div>
					{/* ); */}
			
			</div>
		);
	}
}

TodoListItem.defaultProps = {
	classes: {}
};

TodoListItem.propTypes = {
	classes: PropTypes.object,
	// list: PropTypes.array.isRequired,
};

export default withTranslation() (withStyles(styles, { withTheme: true })(TodoListItem));
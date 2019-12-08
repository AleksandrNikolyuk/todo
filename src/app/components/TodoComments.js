import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import {
	TodoButton,
	TodoImage,
	TodoTextfield,
} from '@todo';
import { addComment } from 'store/action';

const styles = () => ({
	root: {marginBottom: '20px',},
	commentBlock: {
		marginBottom: '20px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

class TodoComments extends Component {

	state = {
		newComment: '',
	}

	handleAddComment = e => {
		this.setState({ newComment: e.target.value });
	};

	handleSubmit = () => {
		const { newComment } = this.state;
		this.props.add_comment( newComment );
		this.setState({ newComment: ''})
	}

	render() {
		const {newComment} = this.state
		const { classes, t } = this.props;
		const { handleAddComment, handleSubmit } = this;
		return (
			<div className={classes.root}>
				<h1>{t('comments')}</h1>
				<div className={classes.commentBlock}>
					<TodoImage/>
					<TodoTextfield
						value={newComment}
						label={t('comments')}
						handlerChange={handleAddComment}
						rows={4}
					/>
				</div>
				<TodoButton
					label={t('buttons.addNew')}
					clickHandler={handleSubmit}
				/>
			</div>
		);
	}
}

TodoComments.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func,
};

TodoComments.defaultProps = {
	classes: {},
};

const mapStateToProps = state => ({
	...state.comments,
});

const mapDispatchToProps = dispatch => ({
	add_comment: (data) => {
		dispatch(addComment(data));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withStyles(styles, { withTheme: true })(TodoComments)));
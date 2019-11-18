import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TodoMenu, TodoItemsContainer, TodoComments } from '@todo';
import { withStyles } from '@material-ui/core/styles';
import {
    addItem,
  } from "@todo/store/action/actions.payload"

  const styles = () => ({
    box: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'row',
    },
})


class TodoLayout extends Component {

    state = {
        newitem: "",
    };

    handleAddItem = value => {
        console.log(value)
        this.setState({ newitem: value });
    };

    handleSubmitItem = () => {
        const { addItem } = this.props;
        const { newitem } = this.state;
        addItem([{ title: newitem, id: "1", comments: [] }]);
        this.setState({ newitem: "" });
    };

    render() {
        const { classes } = this.props
        const { newitem } = this.state
        const { handleAddItem, handleSubmitItem } = this
        const { list} = this.props.todos
        return (
            <div className={classes.box}>
                <TodoMenu/>
                <TodoItemsContainer
                    onClick={handleSubmitItem}
                    onChange={handleAddItem}
                    newitem={newitem}
                    list={list}
                />
                <TodoComments/>
            </div>
        );
    }
}

TodoLayout.propTypes = {
    onClick: PropTypes.func,
    onChange: PropTypes.func,
};

const mapStateToProps = state => ({
    todos: state.todos
})
  
const mapDispatchToProps = dispatch => ({addItem})

  
// export default connect(mapStateToProps, mapDispatchToProps)(TodoLayout);
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TodoLayout))
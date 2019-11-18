import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import { TodoButton } from '@todo';


const styles = () => ({
    box: {
        width: '35%',
        padding: '20px',
        margin: '50px',
        display: 'flex',
        flexDirection: 'column',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: '#eee',
    },
    inputBlock: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textField: {
        width: 430,
    },
})

class TodoListItem extends Component {
    render() {
        const { list  } = this.props;
        console.log(list)
        return (
            <div>
                {list.length !== 0 && list.map(item => {
                {/* {list[0] && list.map(item => { */}
                    return (
                        <div key={item.id}>
                            <div>
                                <div>
                                    <div >{item.title}</div>
                                    <span>
                                        {item.comments.length}
                                    </span>
                                </div>
                                <div>
                                    <TodoButton
                                        variant="outlined"
                                        color="secondary"
                                        className="button"
                                        onClick={() => ({})}
                                    >
                                    Delete
                                    </TodoButton>
                                </div>
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
    clickItem: null
};

TodoListItem.propTypes = {
    list: PropTypes.array.isRequired,
    deleteItem: PropTypes.func,
    clickItem: PropTypes.func
};

export default withStyles(styles)(TodoListItem);
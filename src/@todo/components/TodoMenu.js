import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TodoLang } from '@todo';


const styles = () => ({
    root: {
        background: '#b0e0e6',
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '75px',
    }

})

class TodoMenu extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <h1>Tittle</h1>
                <TodoLang/>
            </div>
        );
    }
}

TodoMenu.propTypes = {

};

export default withStyles(styles)(TodoMenu);
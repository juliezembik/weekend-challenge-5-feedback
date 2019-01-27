import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';

class Comments extends Component {
    constructor() {
        super();
        this.state = {
            comments: '',
        }
    }
    //stores feeling rating as local state to be sent to index.js
    handleChangeState = (event) => {
        this.setState({
            comments: event.target.value,
        })

    }

    submitToRedux = (event) => {
        event.preventDefault();
        const action = {
            type: 'RECEIVE_COMMENTS',
            payload: this.state
        };
        this.props.dispatch(action)
        this.props.history.push('/review')
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitToRedux}>
                    <h2>Do you have any comments about today? (Optional)</h2>
                    <TextField required id="outlined-full-width" type="text" variant="outlined" className="input-four" onChange={this.handleChangeState} />
                    <Button type="submit" variant="contained" color="primary" >Next</Button>
                </form>
            </div>        
        );
    }
}

export default connect()(Comments);
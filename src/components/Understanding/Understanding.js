import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';


class Understanding extends Component {
    constructor() {
        super();
        this.state = {
            understanding: 0,
        }
    }
    //stores feeling rating as local state to be sent to index.js
    handleChangeState = (event) => {
        this.setState({
            understanding: Number(event.target.value),
        })

    }

    submitToRedux = (event) => {
        event.preventDefault();
        const action = {
            type: 'RECEIVE_UNDERSTANDING',
            payload: this.state
        };
        this.props.dispatch(action)
        this.props.history.push('/support')
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitToRedux}>
                    <h2>Do you understand the content today?</h2>
                    <h5>Rate your understanding from 1-5. 1 for really bad, and 5 for excellent!</h5>
                    <TextField required type="number" className="input-two" onChange={this.handleChangeState} />
                    <Button type="submit" variant="contained" color="primary" >Next</Button>
                </form>
            </div>
        );
    }
}

export default connect()(Understanding);
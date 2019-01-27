import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import './Feeling.css';
import { connect } from 'react-redux';

class Feeling extends Component {
    constructor () {
        super();
        this.state = {
            feeling: 0,
        }
    }
    //stores feeling rating as local state to be sent to index.js
    handleChangeState = (event) => {
        this.setState({
            feeling: Number(event.target.value),
        })

    }

    submitToRedux = (event) => {
        event.preventDefault();
        const action = {
            type: 'RECEIVE_FEELING',
            payload: this.state
        };
        this.props.dispatch(action)
        this.props.history.push('/understanding')
    }



    render() {
        return (
            <div className="container">
                {/* <h3>This is feeling number: {JSON.stringify(this.state.feeling)}</h3> */}
                <form onSubmit={this.submitToRedux}>
                    <h2>How are you feeling today?</h2>
                    <h5>Rate your feelings from 1-5. 1 for really bad, and 5 for excellent!</h5>
                    <TextField required type="number" className="input-one" onChange={this.handleChangeState} />
                    <Button type="submit" variant="contained" color="primary" >Next</Button>
                </form>
            </div>

        );
    }
}

export default connect()(Feeling);
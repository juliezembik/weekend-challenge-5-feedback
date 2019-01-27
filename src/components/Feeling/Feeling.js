import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import './Feeling.css';
import { connect } from 'react-redux';

class Feeling extends Component {
    constructor () {
        super();
        this.state = {
            feeling: '',
        }
    }
    //stores feeling rating as local state to be sent to index.js
    submitFeedback = (number) => {
        this.setState({
            feeling: Number(number)
        })

    }

    submitToRedux = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'RECEIVE_FEELING', payload: this.state })

    }



    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitToRedux}>
                    <h2>How are you feeling today?</h2>
                    <h5>Rate your feelings from 1-5. 1 for really bad, and 5 for excellent!</h5>
                    <TextField required type="number" className="input-one" />
                    <Button type="submit" variant="contained" color="primary" onClick={this.submitFeedback} >Next</Button>
                </form>
            </div>

        );
    }
}

export default connect()(Feeling);
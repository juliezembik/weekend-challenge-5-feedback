import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import ReviewItem from './../Review/ReviewItem';

class Support extends Component {
    constructor() {
        super();
        this.state = {
            support: 0,
        }
    }
    //stores feeling rating as local state to be sent to index.js
    handleChangeState = (event) => {
        this.setState({
            support: Number(event.target.value),
        })

    }

    submitToRedux = (event) => {
        event.preventDefault();
        const action = {
            type: 'RECEIVE_SUPPORT',
            payload: this.state
        };
        this.props.dispatch(action)
        this.props.history.push('/comments')
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitToRedux}>
                    <h2>Do you feel supported today?</h2>
                    <h5>Rate your support from 1-5. 1 for really bad, and 5 for excellent!</h5>
                    <TextField required type="number" className="input-three" onChange={this.handleChangeState} />
                    <Button type="submit" variant="contained" color="primary" >Next</Button>
                    <ReviewItem />
                </form>
            </div>
        );
    }
}

export default connect()(Support);
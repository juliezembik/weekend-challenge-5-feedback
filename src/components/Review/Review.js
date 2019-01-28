import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewItem from './ReviewItem';
import axios from 'axios';

class Review extends Component {



    handleSendDatabase = () => {
        const sendToDatabase = Object.values(this.props.reduxStore.receivedFeedback);
        axios({
            method: 'POST',
            url: '/feedback',
            data: sendToDatabase
        }).then((response) => {
            console.log('axios POST', response);
            
        })
    }




//return props.reduxStore information    
render() {

    //conditional rendering
    let buttonForm;
    // this.props.reduxStore.receivedFeedback.forEach((value) => {
        if ((this.props.reduxStore.receivedFeedback.feeling = null ) ||
            (this.props.reduxStore.receivedFeedback.understanding = null) ||
            (this.props.reduxStore.receivedFeedback.support = null )) {
            return buttonForm = <button disabled>Incomplete</button>
        } else if ((this.props.reduxStore.receivedFeedback.feeling = true) ||
            (this.props.reduxStore.receivedFeedback.understanding = true) ||
            (this.props.reduxStore.receivedFeedback.support = true)) {
            return buttonForm = <button onClick={this.handleSendDatabase}>Completed</button>
        };

    return (
        <div className="container">
            <div><ReviewItem /></div>
            <p>{buttonForm}</p>
        </div>



        );

    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(Review);
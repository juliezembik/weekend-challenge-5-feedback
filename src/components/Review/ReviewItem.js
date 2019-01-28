import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewItem extends Component {

    
    //return props.reduxStore information    
    render() {
        return (
            <div className="container">


                <div>
                    <h3>Let's review your feedback!</h3>
                    <ul>
                        <li>Feeling: {this.props.reduxStore.receivedFeedback.feeling}</li>
                        <li>Understanding: {this.props.reduxStore.receivedFeedback.understanding}</li>
                        <li>Support: {this.props.reduxStore.receivedFeedback.support}</li>
                        <li>Comments: {this.props.reduxStore.receivedFeedback.comments}</li>
                    </ul>

                </div>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
            reduxStore
        });

export default connect(mapReduxStoreToProps)(ReviewItem);
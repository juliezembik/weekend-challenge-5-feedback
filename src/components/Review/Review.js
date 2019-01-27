import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {

    
    render() {
        return (
            <div className="container">
                <div>
                    {JSON.stringify(this.props.reduxStore.receivedFeedback)}
                    {this.props.reduxStore.receivedFeedback.map((review) => {
                        return (
                            <div>
                                <p>Feeling: {review.feeling}</p>
                                <p>Understanding: {review.understanding}</p>
                                <p>Support: {review.support}</p>
                                <p>Comments: {review.comments}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(Review);
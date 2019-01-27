import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

class Support extends Component {

    startFeedback = () => {
        this.props.history.push('/feeling')
    }

    render() {
        return (
            <div className="container">
                <div>
                    <h2>Click the Next button to get started on your feedback!</h2>

                    <Button onClick={this.startFeedback} variant="contained" color="primary" >Next</Button>
                </div>
            </div>
        );
    }
}

export default connect()(Support);
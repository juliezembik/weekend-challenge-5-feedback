import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';

class Support extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <h2>Do you feel supported today?</h2>
                    <h5>Rate your feelings from 1-5. 1 for really bad, and 5 for excellent!</h5>
                    <TextField required type="number" className="input-three" />
                    <Button type="submit" variant="contained" color="primary" >Next</Button>
                </div>
            </div>
        );
    }
}

export default connect()(Support);
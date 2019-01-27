import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';

class Comments extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <h2>Do you have any comments about today? (Optional)</h2>
                    <TextField required type="text" className="input-four" />
                    <Button type="submit" variant="contained" color="primary" >Next</Button>
                </div>
            </div>        
        );
    }
}

export default connect()(Comments);
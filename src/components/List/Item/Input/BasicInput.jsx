import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextField } from '@material-ui/core'

export class BasicInput extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { value, onChange} = this.props;
        return (
            <TextField
                value={value}
                size="small"
                label=""
                variant="outlined"
                onChange={onChange}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicInput)
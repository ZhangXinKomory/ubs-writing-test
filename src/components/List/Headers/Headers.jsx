import React, { Component } from 'react'
import { connect } from 'react-redux'
import './headers.scss';

class Headers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { headers } = this.props;
        return (
            <div className='list-headers'>
                { headers.map((header, index)=>{
                    return <div key={ header+index }>{ header }</div>
                }) }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    headers: state.headers
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Headers)

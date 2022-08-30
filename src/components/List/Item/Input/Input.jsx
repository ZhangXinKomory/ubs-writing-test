import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { TextField, Tooltip, ClickAwayListener } from '@material-ui/core'
import List from '../../../../components/List/List'
import { BasicInput } from './BasicInput'
import './input.scss'

export class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showTooltip: false
        }
    }

    handleTooltipClose = () => {
        // this.setState({ showTooltip: false })
    }

    render() {
        const { value, onChange, showChildrenButton, childrenValues, addChild, ...params} = this.props;
        const { showTooltip } = this.state;
        const formatedChildrenValues = childrenValues.map((value, index)=>{
            return {
                id: `id${index}`,
                name: index,
                type: isNaN( value*1 ) ? 'str' : 'int',
                value
            }
        })
        return (
            <Fragment>
                <BasicInput
                    value={value}
                    onChange={onChange}
                />

                {/* TODO need a new component for below */}
                { showChildrenButton && 
                    <ClickAwayListener onClickAway={this.handleTooltipClose}>
                        <Tooltip
                            arrow
                            placement="right"
                            PopperProps={{
                                disablePortal: true,
                            }}
                            onClose={this.handleTooltipClose}
                            open={showTooltip}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            // TODO need to controll the List component in children scope
                            title={<List data={ formatedChildrenValues } addChild={ addChild }></List>}
                        >
                            <span onClick={()=>{this.setState({ showTooltip: true  })}}>...</span>
                        </Tooltip> 
                    </ClickAwayListener>
                }

            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    addChild: item => dispatch({ type: "ADDCHILD", item })
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
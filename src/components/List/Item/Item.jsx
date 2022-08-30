import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select, FormControl, MenuItem } from '@material-ui/core'
import { BasicInput } from './Input/BasicInput'
import { Input } from './Input/Input'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { update, remove } from './../../../store/actions'
import './item.scss'

class Item extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { item, index, remove, update } = this.props;
        const SelectOptions = ['str', 'int', 'list'];
        return (
            <div>
                <BasicInput
                    value={item.name}
                    onChange={ (e) => update({index, key:'name', value:e.target.value})}
                />

                <FormControl variant="outlined" size="small">
                    <Select
                        value={item.type}
                        onChange={ (e) => update({index, key:'type', value:e.target.value})}
                        >
                        {SelectOptions.map((item, index)=>{
                            return <MenuItem key={item+index} value={item}>{item}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                
                <Input
                    value={ item.value }
                    onChange={ (e) => update({index, key:'value', value:e.target.value})}
                    showChildrenButton={ item.type == 'list'}
                    childrenValues = { item.value.split(',') }
                />

                <DeleteForeverIcon onClick={ ()=>{ remove(index) } }/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.list
})

const mapDispatchToProps = dispatch => {
    return {
        remove: index => dispatch({ type: "REMOVE", index }),
        update: (data) => dispatch({ type: "UPDATE", data })
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Item)
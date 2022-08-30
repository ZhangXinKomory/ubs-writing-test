import React, { Component } from "react";
import { connect } from "react-redux";
import Headers from "./Headers/Headers";
import { add, remove } from "../../store/actions";
import Item from "./Item/Item";
import { Button } from "@material-ui/core";
import './List'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  render() {
    let { list, defaultItem, add, data, addChild } = this.props;
    list = data || list;
    return (
      <div>
        <Button className="add-btn" onClick={() => add(defaultItem)}> Add </Button>

        <Headers btns={["Name", "Type", "Value"]} />

        {list.map((item, index) => {
          return <Item key={item.id + index} item={item} index={index} />;
        })}

      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list,
  defaultItem: state.defaultItem
});

const mapDispatchToProps = dispatch => {
  return {
    add: item => dispatch({ type: "ADD", item })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

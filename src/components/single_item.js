import React from "react";
import {connect} from "react-redux";
import {getSingleItem, clearSingleItem, toggleComplete} from "../actions";


class SingleItem extends React.Component {
  componentDidMount() {
    console.log("Item ID", this.props);
    this.props.getSingleItem(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.clearSingleItem();
  }

    render() {
      console.log("Single Item:", this.props);
      const {item, toggleComplete, match: {params}} = this.props;
      return (
        <div>
          <h1 className="center">To Do Item</h1>
          <h3>Item: {item.title}</h3>
          <h4>Details: {item.details}</h4>
          <h4 className={`${item.complete ? 'green-text' : 'red-text'} darken 2`}>
            {item.complete ? "Item has been completed" : "Item NOT complete"}
          </h4>
          <button onClick={() => toggleComplete(params.id)} className={`btn ${item.complete ? "red" : "green"}`}>
            {item.complete ? 'Unfinished' : "Complete item"}
          </button>
        </div>
      )
    }
}

function mapStateToProps(state) {
  console.log("State:", state);
  return {
    item: state.list.single
  };
}

export default connect(mapStateToProps, {
  getSingleItem: getSingleItem,
  clearSingleItem: clearSingleItem,
  toggleComplete: toggleComplete
})(SingleItem);

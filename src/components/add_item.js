import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {addListItem} from "../actions";

class AddItem extends React.Component {
  renderInput(props) {
    const {input, label, meta: {touched, error} } = props;
    console.log("Render Input Arguments", props);
    return (
      <div className="row">
        <div className="s12">
          <label>{label}</label>
          <input {...input} type="text" autoComplete="off"/>
          <p className="red-text text-darken-2">{touched && error}</p>
        </div>
      </div>
    )
  }

  saveItem = async (values) => {
    console.log("Values", values);
    await this.props.addListItem(values);
    this.props.history.push('/');
  }

  render() {
    console.log("Add Item Props", this.props);
    const {handleSubmit} = this.props;
    return (
      <div>
        <h1 className="center">Add Item</h1>
        <div className="row">
          <div className="col s8 offset-s2">
            <form onSubmit={handleSubmit(this.saveItem)}>
              <Field name="title" component={this.renderInput} label="Title"/>
              <Field name="details" component={this.renderInput} label="Details"/>
              <div className="row">
                <div className="s12 right-align">
                  <button className="btn yellow darken-4">Add Item</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function validate(values) {
    const {title, details} = values;
    const errors = {};
    if(!title) {
      errors.title = "Please give your item a title";
    }

    if(!details) {
      errors.details = "Please give your item some details";
    }

    return errors;
}

AddItem = reduxForm({
  form: "add-item",
  validate: validate
})(AddItem)

export default connect(null, {
  addListItem: addListItem
})(AddItem);

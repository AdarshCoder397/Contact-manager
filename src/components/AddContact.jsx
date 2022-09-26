import React from "react";
import { Link } from "react-router-dom";

let data = { id: new Date().getTime(), name: "", email: "" };

class AddContact extends React.Component {
  state = data;

  add = (e) => {
    let Arr = JSON.parse(localStorage.getItem("contacts"));
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Enter a valid value!");
      return;
    }
    if (Arr === null) {
      Arr = [];
      Arr.push(this.state);
      this.props.addContact(Arr);
      this.setState({ name: "", email: "", id: new Date().getTime() });
      alert("Contact Added!");
    } else {
      Arr.push(this.state);
      this.props.addContact(Arr);
      this.setState({ name: "", email: "", id: new Date().getTime() });
      alert("Contact Added!");
    }
  };
  render() {
    return (
      <div className="ui main">
        <h1>
          Add Contact
          <Link to="/">
            <button className="ui right floated button blue">Contact List</button>
          </Link>
        </h1>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter the name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter the email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}
export default AddContact;

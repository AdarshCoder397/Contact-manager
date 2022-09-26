import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
const ContactList = (props) => {
  const DisplayContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        deleteContact={props.deleteContact}
        showId={props.showId}
      />
    );
  });
  return (
    <div className="main">
      <h1>
        Contact List
        <Link to="/add">
          <button className="ui button blue right floated">Add Contact</button>
        </Link>
      </h1>
      <div className="ui celled list">{DisplayContactList}</div>
    </div>
  );
};

export default ContactList;

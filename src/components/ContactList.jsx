import React from "react";
import ContactCard from './ContactCard'
const ContactList = (props) => {
  const DisplayContactList = props.contacts.map((contact) => {
    return (
        <ContactCard contact={contact}/>
    );
  });
  return <div className="ui celled list">{DisplayContactList}</div>;
};

export default ContactList;

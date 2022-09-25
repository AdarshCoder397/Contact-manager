import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContact = (contact) => {
    // setContacts(...contacts, contact);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contact));
    const retreiveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
      setContacts(retreiveContacts);
    }
  };

  useEffect(() => {
    const retreiveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
      setContacts(retreiveContacts);
    }
  }, []);
  const deleteContact = (contact) => {
    let filtered_contacts = contacts.filter(contactItem => contactItem.id !== contact.id)
    console.log(contact.id)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filtered_contacts));
    setContacts(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
  }

  return (
    <>
      <Header />
      <div className="ui container">
        <AddContact addContact={addContact} contacts={contacts} />
        <ContactList contacts={contacts} deleteContact={deleteContact} key={contacts.id} />
      </div>
    </>
  );
}

export default App;

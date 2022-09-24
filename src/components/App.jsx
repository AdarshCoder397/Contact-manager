import React, { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
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
  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <Header />
      <div className="ui container">
        <AddContact addContact={addContact} contacts={contacts} />
        <ContactList contacts={contacts}/>
      </div>
    </>
  );
}

export default App;

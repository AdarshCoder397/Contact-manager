import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    let filtered_contacts = contacts.filter(
      (contactItem) => contactItem.id !== contact.id
    );
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filtered_contacts));
    setContacts(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  };
  const showDetail = (contact) => {
    return (
      contact.id
    )
  }

  return (
    <>
      <Header />
      <div className="ui container">
        <Router>
          <Routes>
            <Route
              path='/add'
              element={
                <AddContact addContact={addContact} contacts={contacts} />
              }
            />
            <Route
              exact path="/"
              element={
                <ContactList
                  contacts={contacts}
                  deleteContact={deleteContact}
                  showDetail={showDetail}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

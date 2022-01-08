import "./App.css";
import Phonebook from "./Components/Phonebook";
import React from "react";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";
export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <Phonebook />
      <Filter />
      <h2>Contacts</h2>
      <ContactList />
    </>
  );
}

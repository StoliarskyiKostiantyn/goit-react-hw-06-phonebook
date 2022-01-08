import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../redux/contacts/contacts-actions";

export default function ContactList() {
  const contacts = useSelector((state) =>
    filterElements(state.contacts.items, state.contacts.filter)
  );
  const dispatch = useDispatch();
  function filterElements(contacts, filterValue) {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  }
  return (
    <>
      <div>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <span>
                Name:{contact.name} Phone:{contact.phone}
              </span>
              <button
                type="button"
                id={contact.id}
                onClick={(evt) => dispatch(deleteContact(evt.currentTarget.id))}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

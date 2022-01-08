import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../redux/contacts/contacts-actions";

export default function Phonebook({ onSubmit }) {
  const [name, setName] = useState("");
  const [phone, setNumber] = useState("");
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const reset = () => {
    setName("");
    setNumber("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const contact = { id, name, phone };
    const notUniqueName = contacts.some((item) => item.name === name);
    const notUniqueNumber = contacts.some((item) => item.phone === phone);

    if (notUniqueName) {
      return alert(name + " уже добавлен(а) в список контактов");
    } else if (notUniqueNumber) {
      return alert("Уже добавлен контакт с номером: " + phone);
    } else if (name === "" || phone === "") {
      return alert("Пожалуйста, введите Имя и номер.");
    } else {
      dispatch(addContact(contact));
      reset();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Имя
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            onChange={(evt) => {
              setName(evt.target.value);
            }}
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          Phone
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(evt) => {
              setNumber(evt.target.value);
            }}
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}

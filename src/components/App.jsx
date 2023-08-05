import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer } from 'react-toastify';
// npm i react-toastify
import { toast } from 'react-toastify';
import { begincontact } from 'data/begincontact';
import 'react-toastify/dist/ReactToastify.css';
import css from './ContactForm/ContactForm.module.css';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import useLocSt from 'hooks/useLocSt';

export const Context = React.createContext();

export default function App() {
  const [contacts, setContacts] = useLocSt('contacts', begincontact);
  const [filterCon, setFilterCon] = useState('');
  const [filtrat, setFiltrat] = useState([]);

  //   зберігання з форми
  const formLister = data => {
    const addCopy = contacts.find(
      // заборона  однакових імен
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (addCopy) {
      toast.warn(`👻 Уважніше,  ${data.name}  вже Є в конТАКтах 👻`);
      return;
    }
    // оновлення після сабміту
    setContacts(contacts => [
      ...contacts,
      ...[{ id: nanoid(), name: data.name, number: data.number }],
    ]);
  };

  //  зняття з  фільтру
  const formFilter = event => {
    const { value } = event.target;
    setFilterCon(value);
  };

  // фільтрат
  useEffect(() => {
    const fillT = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterCon)
    );
    // запис до ст фильтру
    const filtratNew = setFiltrat(fillT);
    return () => filtratNew;
  }, [filterCon.length, contacts, filterCon]);
  //  для видалення
  const deliter = id => {
    const goodBayContact = contacts.filter(contact => contact.id !== id);
    setContacts(contacts => goodBayContact);
  };
  // console.log(filtrat, 4564654)

  return (
    <Context.Provider
      value={{
        formProps: formLister,
        filterProp: formFilter,
        contacts: contacts && filtrat,
        deliter: deliter,
      }}
    >
      <div className={css.forms}>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <h1>Телефонна книга</h1>
        <ContactForm />
        <h2>Контакти</h2>
        <h5>ЗНАЙдіть конТАКт за ім'ям</h5>
        <Filter />

        {/* є фільтрат */}
        {filterCon.length > 0 ? (
          <ContactList
            contacts={filtrat}
            // немає фільтрату
          />
        ) : (
          <ContactList contacts={contacts} />
        )}
      </div>
    </Context.Provider>
  );
}

import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer } from 'react-toastify';
// npm i react-toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './ContactForm/ContactForm.module.css';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import useLocSt from 'components/hooks/useLocSt';

const begincontact = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useLocSt('contacts', begincontact);
  const [filterCon, setFilterCon] = useState('');

  //   пропс формі і зберігання з форми
  const formLister = data => {
    const addCopy = contacts.find(
      // заборона додавання однакових імен
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (addCopy) {
      toast.warn(`👻 Уважніше,  ${data.name}  вже Є в конТАКтах 👻`);
      return;
    }
    // оновлення списку доданих контактів після сабміту
    setContacts(contacts => [
      ...contacts,
      ...[{ id: nanoid(), name: data.name, number: data.number }],
    ]);
  };

  //  зняття вBоду з  фільтру
  const formFilter = event => {
    const { value } = event.target;
    setFilterCon(value);
  };
  // фільтрат
  const filtrat = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterCon.toLowerCase())
  );

  //  для видалення
  const deliter = id => {
    const goodBayContact = contacts.filter(contact => contact.id !== id);
    setContacts(contacts => goodBayContact);
  };

  return (
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
      <ContactForm
        // пропс метод  зберігання з форми
        formProps={formLister}
      />
      <h2>Контакти</h2>
      <h5>ЗНАЙдіть конТАКт за ім'ям</h5>
      <Filter
        // методпропс фільтрації
        filterProp={formFilter}
      />

      {/* умова рендеру контактів */}
      {/* є фільтрат */}
      {filterCon.length > 0 ? (
        <ContactList
          contacts={filtrat}
          deliter={deliter}
          // немає фільтрату
        />
      ) : (
        <ContactList contacts={contacts} deliter={deliter} />
      )}
    </div>
  );
}

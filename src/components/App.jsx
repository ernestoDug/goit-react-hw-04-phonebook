import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';

import css from './ContactForm/ContactForm.module.css';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import  useLocSt from 'components/hooks/useLocSt'

const begincontact = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' }, 
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

 
 
 export default function App ()  {
  const [contacts, setContacts] = useLocSt('contacts', begincontact) ;
  const [filterCon, setFilterCon] = useState('');
const [filtrat, setFiltrat] = useState([]);

  // метод для передачі пропсом формі і зберігання з форми
  const formLister = (data) => {
    const addCopy = contacts.find(
      // заборона додавання однакових імен
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    console.log(data, "copy")
    if (addCopy) {
      alert(`Уважніше,  ${data.name}  вже записана в контактах `);
      return;
    }
    console.log(data, "fffffffffffffffffffffff")
    // оновлення списку доданих контактів після сабміту

    setContacts(contacts =>  [
          ...contacts,
          ...[{ id: nanoid(), name: data.name, number: data.number }],
        ]  
    );
  };

  
             
    
  //метод пропс  для  зняття воду з інпуту фільтру
  const  formFilter = (event) => {
    const { value } = event.target;
    setFilterCon(value)};
    
    // фільтрат з недоторканим стейтом контактів
    useEffect(()=>{  
      const fillT = contacts.filter(contact =>
        (contact.name.includes(filterCon))
        );
        setFiltrat(filtrat => fillT)
        console.log(filtrat, "3333333333333")
        
      }, [ filterCon  ] 

          );
// const [filterCon, setFilterCon] = useState('')}



  //  для видалення
 const deliter = (id) => {
    const goodBayContact = contacts.filter(
      contact => contact.id !== id
    );
    setContacts(contacts => goodBayContact,
    )
  };


    return (
      <div className={css.forms}>
        <h1>Телефонна книга</h1>
        <ContactForm
          // пропс метод для зберігання після саб з форми
          formProps={ formLister }
        />
        <h2>Контакти</h2>
        <h5>ЗНАЙдіть конТАКт за ім'ям</h5>
        <Filter
          // методпропс фільтрації
          filterProp = { formFilter }
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

  
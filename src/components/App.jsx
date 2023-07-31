import { Component } from 'react';
import { nanoid } from 'nanoid';

import css from './ContactForm/ContactForm.module.css';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const begincontact = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' }, 
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export class App extends Component {
  state = {
    contacts: begincontact,
    filter: '',
  };
  // метод для передачі пропсом формі і зберігання з форми
  formLister = data => {
    // const addCopy = this.state.contacts.find(
    //   // заборона додавання однакових імен
    //   // contact => contact.name.toLowerCase() === data.name.toLowerCase()
    // );
    // // console.log(addCopy, "copy")
    // if (addCopy) {
    //   alert(`Уважніше,  ${data.name}  вже записана в контактах `);
    //   return;
    // }
    console.log(data)
    // оновлення списку доданих контактів після сабміту
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          ...[{ id: nanoid(), name: data.name, number: data.number }],
        ],
      };
    });
  };

  // завантаження в л/с
  componentDidUpdate(_, prevState) {
    // console.log("prv:", prevState, "this:", this.state);
    //  умова додавання у л/с -  перевірка як було як стало
    if (prevState.contacts !== this.state.contacts) {
      // console.log("halliluia, brothers and sisters - update began");
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  // вихід з л/с
  componentDidMount() {

    const backFromLocal = JSON.parse(localStorage.getItem('contacts'));
    // console.log(backFromLocal,  "хай, локал сторидж існує...");
    // перевірка сховища
    if ( backFromLocal) { this.setState({ contacts: backFromLocal })
  }
  }

  //метод пропс  для  зняття воду з інпуту фільтру
  formFilter = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // console.log(this.state.filter, "st")
  };

  // фільтрат з недоторканим стейтом контактів
  felitCon = filter => {
    const filtrat = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return filtrat;
  };

  //  для видалення
  deliter = id => {
    const goodBayContact = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState(prevState => ({
      contacts: goodBayContact,
    }));
  };

  render() {
    return (
      <div className={css.forms}>
        <h1>Телефонна книга</h1>
        <ContactForm
          // пропс метод для зберігання після саб з форми
          formProps={this.formLister}
        />
        <h2>Контакти</h2>
        <h5>ЗНАЙдіть конТАКт за ім'ям</h5>
        <Filter
          // методпропс фільтрації
          filterProp={this.formFilter}
        />

        {/* умова рендеру контактів */}
        {/* є фільтрат */}
        {this.state.filter.length > 0 ? (
          <ContactList
            contacts={this.felitCon()}
            deliter={this.deliter}
            // немає фільтрату
          />
        ) : (
          <ContactList contacts={this.state.contacts} deliter={this.deliter} />
        )}
      </div>
    );
  }
}

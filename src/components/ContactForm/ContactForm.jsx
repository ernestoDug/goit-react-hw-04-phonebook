// import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';

import { useState } from 'react';

import css from './ContactForm.module.css';

// форма
export default function ContactForm({ formProps }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // обранник універсальний
  const changer = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name': {
        setName(value);
        break;
      }
      case 'number': {
        setNumber(value);

        break;
      }
      default:
        return;
    }
  };
  // відправник
  const submiter = event => {
    event.preventDefault();
    // виклик методу з ап
    formProps({ name, number });
    // очисники
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={submiter} className={css.formsWr}>
      <label className={css.label}>
        Ім'я
        <input
          className={css.input}
          onChange={changer}
          value={name}
          // pattern= "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          //  так чомусь помилка в консолі
          type="text"
          placeholder="Введіть ім'я"
          title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад Адріан, Джейкоб Мерсер, Шарль де Бац де Кастельмор д'Артаньян"
          name="name"
          required
        />
      </label>

      <label className={css.label}>
        Номер телефону
        <input
          className={css.input}
          type="tel"
          placeholder="Введіть номер телефону"
          onChange={changer}
          value={number}
          name="number"
          // pattern= "\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // i так чомусь помилка в консолі

          title="Номер телефону має складатися з цифр і може містити пробіли, тире, круглі дужки та починатися з +"
          required
        />
      </label>

      <button className={css.buttons} type="submit">
        Додати контакт{' '}
      </button>
    </form>
  );
}

// // прототайпи
ContactForm.propTypes = {
  number: PropTypes.number,
  name: PropTypes.string,
};

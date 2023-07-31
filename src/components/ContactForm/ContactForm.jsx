// import { nanoid } from 'nanoid'
// import PropTypes from 'prop-types';

import { useState } from 'react';

import css from './ContactForm.module.css';


// форма
export default function ContactForm () {

  const [name, setName] = useState('');
    const [number, setNumber] = useState('');




  const changerName = event => {
    //     const { name, value } = event.target;
  setName( event.target.value)
  }

  const changerNamber = event => {
    //     const { name, value } = event.target;
       setNumber( event.target.value)
  }

// 1554
// console.log(formState)
//   //  //  один змінювач на двох
//   
//     this.setState({ [name]: value });
//   };
//   // відправник
//   submiter = event => {
//     event.preventDefault();
//     const { name, number } = this.state;
//     // виклик методу з ап і передача йому стейту з форми для зберігання
//     this.props.formProps({ name, number });
//     // очисник
//     this.reset();
//   };
//   // очисник
//   reset = () => {
//     this.setState({ ...INITIAL_STATE });
  // };


    return (
      <form >
        {/* onSubmit={} className={css.formsWr} */}
        <label className={css.label}>
          Ім'я
          <input
            className={css.input}
            onChange={changerName}
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
            onChange={changerNamber}
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


// // // прототайпи
// ContactForm.propTypes = {
//   number: PropTypes.number,
//   name: PropTypes.string,
// };


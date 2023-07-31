// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import css from './ContactList.module.css';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, deliter }) => {
  // console.log(contacts,"contacts")
  return (
    <ul className={css.listCont}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          id={id}
          key={id}
          name={name}
          number={number}
          deliter={deliter}
        />
      ))}
    </ul>
  );
};
// протайпи
ContactList.propTypes = {
  number: PropTypes.number,
  name: PropTypes.string,
  id: PropTypes.string,
};

export default ContactList;

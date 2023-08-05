// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import { useContext } from 'react';
import css from './ContactList.module.css';

import ContactItem from './ContactItem';
import { Context } from 'components/App';

const ContactList = () => {
  const context = useContext(Context);

  return (
    <ul className={css.listCont}>
      {context.contacts.map(({ id, name, number }) => (
        <ContactItem id={id} key={id} name={name} number={number} />
      ))}
    </ul>
  );
};
// протайпи
// ContactList.propTypes = {
//   number: PropTypes.number,
//   name: PropTypes.string,
//   id: PropTypes.string,
// };

export default ContactList;

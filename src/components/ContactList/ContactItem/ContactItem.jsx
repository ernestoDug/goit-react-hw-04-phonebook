// import { nanoid } from 'nanoid';

import PropTypes from 'prop-types';

import css from './ContactItem.module.css';

const ContactItem = ({ name, number, id, deliter }) => {
  return (
    <li className={css.listContItem}>
      {name}: {number}
      <button
        className={css.listContDell}
        onClick={() => {
          deliter(id);
        }}
      >
        <span className={css.listContDellX}>Х</span>
      </button>
    </li>
  );
};

// протайпи
ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactItem;

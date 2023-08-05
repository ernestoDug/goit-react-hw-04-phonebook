// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import css from './ContactItem.module.css';

import { Context } from 'components/App';

const ContactItem = ({ name, number, id }) => {
  const context = useContext(Context);
  return (
    <li className={css.listContItem}>
      {name}: {number}
      <button
        className={css.listContDell}
        onClick={() => {
          context.deliter(id);
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

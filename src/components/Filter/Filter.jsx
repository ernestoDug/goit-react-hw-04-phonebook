// import PropTypes from 'prop-types';
import { useContext } from 'react';
import css from './Filter.module.css';

import { Context } from 'components/App';

const Filter = () => {
  const context = useContext(Context);
  return (
    <>
      <input
        name="filter"
        className={css.filter}
        type="text"
        onChange={context.filterProp}
        placeholder="Введіть ім'я контакту"
        title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад Адріан, Джейкоб Мерсер, Шарль де Бац де Кастельмор д'Артаньян"
      />
    </>
  );
};

// проптайпи
// Filter.propTypes = {
//   filterProp: PropTypes.func.isRequired,
// };

export default Filter;

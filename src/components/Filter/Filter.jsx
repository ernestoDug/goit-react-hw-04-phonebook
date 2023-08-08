import PropTypes from 'prop-types';

import css from './Filter.module.css';

const Filter = ({ filterProp }) => {
  return (
    <>
      <input
        name="filter"
        className={css.filter}
        type="text"
        onChange={filterProp}
        placeholder="Введіть ім'я контакту"
        title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад Адріан, Джейкоб Мерсер, Шарль де Бац де Кастельмор д'Артаньян"
      />
    </>
  );
};

// проптайпи
Filter.propTypes = {
  filterProp: PropTypes.func.isRequired,
};

export default Filter;

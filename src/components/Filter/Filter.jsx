import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filterValue, onFilter }) => {
  const filterId = nanoid();

  const handleChange = e => {
    const value = e.currentTarget.value;
    onFilter(value);
  };

  return (
    <>
      <label htmlFor={filterId} className={css.label}>
        Find Contacts by name
        <input
          className={css.input}
          value={filterValue}
          onChange={handleChange}
          id={filterId}
        />
      </label>
    </>
  );
};

Filter.propType = {
  filterValue: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;

import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';

function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <h4 className={style.highlight}>Find contacts by name</h4>
      <input type="text" value={value} onChange={onChangeFilter}></input>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
export default Filter;

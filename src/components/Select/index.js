import React from 'react';

const places = [
  'Kampala, Uganda',
  'Mbale, Uganda',
  'Mbarara, Uganda',
  'Gulu, Uganda',
  'Nairobi, Kenya',
  'Kisumu, Kenya',
  'Dar es salaam, Tanzania',
  'Dodoma, Tanzania'
];
const Select = ({ handleChange, loc, selectedPlace }) => (
  <select
    name={loc}
    value={selectedPlace}
    onChange={handleChange}
  >
    {places.map(place => {
      return (
        <option key={place} value={place}>
          {place}
        </option>
      );
    })}
  </select>
);

export default Select;

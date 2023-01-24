import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const partner = person.sex === 'f'
    ? 'husband'
    : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>

      {person.age && (
        <p className="Person__age">{`I am ${person.age}`}</p>
      )}

      {person.isMarried
        ? <p className="Person__partner">{`${person.partnerName} is my ${partner}`}</p>
        : <p className="Person__partner">I am not married</p>
      }
    </section>
  );
};

Person.defaultProps = {
  age: null,
  isMarried: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string.isRequired,
};
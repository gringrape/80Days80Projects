import React from 'react';
import PropTypes from 'prop-types';

import { Title, Input } from './styledComponents';

export default function DecimalResult({ convertedNumber }) {
  return (
    <div>
      <Title>Decimal Output</Title>
      <Input type="text" value={convertedNumber} onChange={() => {}} />
    </div>
  );
}

DecimalResult.propTypes = {
  convertedNumber: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

import { Title, Input, Button } from './styledComponents';

export default function BinaryForm({
  inputNumber,
  onChange,
  onClick,
}) {
  return (
    <form>
      <Title>Binary Input</Title>
      <Input
        type="text"
        placeholder="Enter 0 or 1"
        value={inputNumber}
        onChange={onChange}
      />
      <Button type="button" onClick={onClick}>Convert</Button>
    </form>
  );
}

BinaryForm.propTypes = {
  inputNumber: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

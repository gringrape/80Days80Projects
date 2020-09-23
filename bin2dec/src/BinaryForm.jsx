import React from 'react';

import { Title, Input, Button } from './styledComponents';

export default function BinaryForm() {
  return (
    <form>
      <Title>Binary Input</Title>
      <Input type="text" placeholder="Enter 0 or 1" />
      <Button type="button">Convert</Button>
    </form>
  );
}

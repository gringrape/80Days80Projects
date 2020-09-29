import React from 'react';
import styled from 'styled-components';

import Lights from './Lights';
import Button from './Button';

const Title = styled.h1`
`;

export default function Page() {
  return (
    <div>
      <Title>
        merry christmas
      </Title>
      <Lights />
      <Button />
    </div>
  );
}

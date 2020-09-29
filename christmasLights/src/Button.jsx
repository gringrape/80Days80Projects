import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: .2rem 1rem;
  letter-spacing: .2rem;
`;

export default function Button() {
  return (
    <StyledButton>
      On/Off
    </StyledButton>
  );
}

import styled from 'styled-components';

export const Wrapper = styled.div<{ strokeWidth?: number }>`
  & > svg {
    display: block;
    stroke-width: ${p =>
      p.strokeWidth !== undefined ? p.strokeWidth + 'px' : undefined};
  }
`;

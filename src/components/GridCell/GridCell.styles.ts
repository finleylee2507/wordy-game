import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 5px;
  border: 2px solid var(--borderColor);
  background-color: var(--backgroundColor);
  width: var(--width);
  aspect-ratio: 1 / 1;
  line-height: 0;
  display: grid;
  place-content: center;
`;

export const Content = styled.span`
  color: var(--textColor);
  text-transform: capitalize;
  font-size: var(--fontSize);
  font-weight: bold;
`;

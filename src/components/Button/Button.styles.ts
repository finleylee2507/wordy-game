import styled from 'styled-components';

export const Wrapper = styled.button`
  padding: var(--padding);
  border-radius: var(--border-radius);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  width: var(--width);
  color: var(--text-color);
  background-color: var(--background-color);
  border: var(--border);
  border-color: var(--border-color);
  cursor: pointer;
  box-shadow: var(--box-shadow);
  transition:
    box-shadow 300ms ease,
    opacity 300ms ease;
  opacity: var(--opacity);
  &:hover,
  &:focus {
    box-shadow: var(--box-shadow-hover);
    opacity: 1;
  }
`;

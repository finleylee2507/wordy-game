import styled from 'styled-components';
import { UnstyledButton } from '../UnstyledButton';

export const CellWrapper = styled(UnstyledButton)`
  background-color: var(--background-color);
  border-radius: 5px;
  display: grid;
  place-content: center;
  width: var(--cell-width);
  height: var(--cell-height);
`;

export const CellContent = styled.span`
  color: var(--text-color);
  font-size: var(--font-size);
  font-weight: 600;
  line-height: 1;
`;

export const KeyboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const KeyboardRow = styled.div`
  display: flex;
  gap: 10px;
`;

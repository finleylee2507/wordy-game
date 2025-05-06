import styled from 'styled-components';
import { UnstyledButton } from '../UnstyledButton';

export const Wrapper = styled.div`
  background-color: var(--color-pale-white);
  border-radius: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

export const IconButton = styled(UnstyledButton)`
  &:hover {
    transform: scale(1.2);
    transition: transform ease-out 250ms;
  }

  transition: transform ease-in 250ms;
`;

export const Branding = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const AppLogoWrapper = styled.div`
  width: 28px;
`;

export const AppLogo = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
`;

export const Heading = styled.h3``;

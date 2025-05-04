import styled from 'styled-components';
import { Dialog } from 'radix-ui';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: var(--color-white);
  opacity: 0.5;
`;

export const Content = styled(Dialog.Content)`
  background-color: var(--color-white);
  width: min(520px, 100%);
  max-height: min(680px, 100%);
  position: fixed;
  inset: 0;
  margin: auto;
  overflow: auto;
  box-shadow: var(--shadow-elevation-medium);
  border: 1px solid var(--color-gray-50);
  border-radius: 10px;
  padding: 40px;
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 10px;
  background: transparent;
  border: none;
`;

export const Description = styled.section`
  margin-bottom: 10px;
`;

export const Heading = styled.h4`
  text-transform: capitalize;
  font-weight: 900;
`;

export const SubHeading = styled.h5`
  margin-top: 5px;
`;

export const Rules = styled.ul`
  padding-left: 18px;
  margin-top: 15px;
`;

export const Rule = styled.li``;

export const Divider = styled.div`
  height: 1px;
  background-color: var(--color-gray-100);
  width: 100%;
`;

export const Examples = styled.section`
  margin-top: 10px;
`;

export const ExamplesHeading = styled.h5`
  font-weight: bold;
`;

export const ExampleHeading = styled.h6``;

export const Example = styled.div`
  margin-top: 10px;
`;

export const ExampleGrid = styled.div`
  display: flex;
  gap: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const ExampleDescription = styled.p``;

export const ExampleDescriptionHighlightedWord = styled.span`
  text-transform: uppercase;
  font-weight: bold;
`;

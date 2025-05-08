import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--color-off-white);
  min-height: 100%;
`;

export const MaxWidthWrapper = styled.div`
  max-width: 1248px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: clamp(20px, 4vh, 50px);
  padding-bottom: clamp(40px, 10vh, 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(40px, 5vh, 90px);
`;

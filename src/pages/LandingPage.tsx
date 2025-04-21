import styled, { keyframes } from 'styled-components';
import wordyLogo from '../../public/assets/wordy-icon.svg';
import wordyGrid from '../../public/assets/wordy-grid.png';
import wordyKeyboard from '../../public/assets/keyboard.png';
import decoration from '../../public/assets/hexagon-decoration.svg';
import { Button } from '../components/Button';

const LandingPage = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <FlexContainer>
          <LeftColumn>
            <WordyLogoWrapper>
              <WordyLogo src={wordyLogo} alt="Wordy logo" />
            </WordyLogoWrapper>

            <Title>
              <TitleLetter>W</TitleLetter>
              <TitleLetter>O</TitleLetter>
              <TitleLetter>R</TitleLetter>
              <TitleLetter>D</TitleLetter>
              <TitleLetter>Y</TitleLetter>
            </Title>

            <Description>
              <DescriptionWord>Get</DescriptionWord>{' '}
              <DescriptionWord>6</DescriptionWord>{' '}
              <DescriptionWord>chances</DescriptionWord>{' '}
              <DescriptionWord>to</DescriptionWord>{' '}
              <DescriptionWord>guess</DescriptionWord>{' '}
              <DescriptionWord>a</DescriptionWord>{' '}
              <DescriptionWord>5-letter</DescriptionWord>{' '}
              <DescriptionWord>word</DescriptionWord>
            </Description>

            <ButtonContainer>
              <Button variant="filled" color="green-dark" size="medium">
                Play
              </Button>
              <Button variant="outlined" color="green-dark" size="medium">
                How to play
              </Button>
            </ButtonContainer>
          </LeftColumn>
          <RightColumn>
            <WordyGridWrapper>
              <WordyGrid src={wordyGrid} alt="Wordy grid" />
            </WordyGridWrapper>
          </RightColumn>
        </FlexContainer>
        <WordyKeyboardWrapper>
          <WordyKeyboard src={wordyKeyboard} alt="Wordy keyboard" />
        </WordyKeyboardWrapper>

        <DecorationWrapper>
          <Decoration src={decoration} />
        </DecorationWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  background-color: var(--color-green-100);
  min-height: 100%;
  overflow: clip;
`;

const ContentWrapper = styled.div`
  max-width: 1248px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 100px;
  margin-left: auto;
  margin-right: auto;
  min-height: min(95vh, 950px);
  position: relative;

  @media screen and (max-width: 1500px) {
    max-width: 90%;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  row-gap: 80px;
  column-gap: 30px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  padding-top: 20px;
  flex: 5;
  min-width: 350px;

  @media screen and (max-width: 800px) {
    min-width: unset;
    text-align: center;
  }
`;

const RightColumn = styled.div`
  flex: 4;
  display: flex;
  justify-content: center;
`;

const logoReveal = keyframes`
  0% {
    opacity: 0;
    transform: perspective(600px) rotateX(90deg) scale(0.6);
    filter: blur(5px);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  40% {
    opacity: 1;
    filter: blur(0);
  }
  70% {
    transform: perspective(600px) rotateX(-15deg) scale(1.1);
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: perspective(600px) rotateX(0) scale(1);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  }
`;

const WordyLogoWrapper = styled.span`
  display: inline-block;
  width: ${175 / 16}rem;
  animation: ${logoReveal} 800ms cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  transform-origin: center top;
  will-change: transform, opacity, filter;

  @media screen and (max-width: 800px) {
    width: 30%;
  }
`;

const WordyLogo = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
`;

const titleLetterReveal = keyframes`
  0% {
    opacity: 0;
    transform: scale(1);
  }
  
  25%{
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 1;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }

`;
const Title = styled.h1`
  margin-top: 15px;
`;

const TitleLetter = styled.span`
  display: inline-block;
  text-transform: uppercase;
  animation: ${titleLetterReveal} linear 1000ms both;
  will-change: transform;
  transform: scale(0);

  &:nth-child(1) {
    animation-delay: 800ms;
  }

  &:nth-child(2) {
    animation-delay: 900ms;
  }

  &:nth-child(3) {
    animation-delay: 1000ms;
  }

  &:nth-child(4) {
    animation-delay: 1100ms;
  }

  &:nth-child(5) {
    animation-delay: 1200ms;
  }
`;

const descriptionWordReview = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0;
  }

  50% {
    transform: translateY(-50%);
    opacity: 1;
  }

  100% {
    transform: translateY(0);
  }
`;

const Description = styled.h3`
  margin-top: 25px;
`;

const DescriptionWord = styled.span`
  display: inline-block;
  animation: ${descriptionWordReview} 500ms ease both;
  will-change: transform, opacity;

  &:nth-child(1) {
    animation-delay: 2000ms;
  }

  &:nth-child(2) {
    animation-delay: 2100ms;
  }

  &:nth-child(3) {
    animation-delay: 2200ms;
  }

  &:nth-child(4) {
    animation-delay: 2300ms;
  }

  &:nth-child(5) {
    animation-delay: 2400ms;
  }

  &:nth-child(6) {
    animation-delay: 2500ms;
  }

  &:nth-child(7) {
    animation-delay: 2600ms;
  }

  &:nth-child(8) {
    animation-delay: 2700ms;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  column-gap: 40px;
  row-gap: 20px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const WordyGridWrapper = styled.div`
  min-width: 400px;
  max-width: 600px;

  @media screen and (max-width: 800px) {
    min-width: unset;
  }
`;

const WordyGrid = styled.img`
  width: 100%;
`;

const slideUp = keyframes`
  from {
    transform: translateY(300%);
  }

  to {
    transform: translateY(100%);
  }
`;

const WordyKeyboardWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  will-change: transform;
  animation: ${slideUp} ease-out 800ms both;

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateX(-50%) translateY(-100%);
  }

  to {
    transform: translateX(-50%) translateY(120px);
  }
`;

const WordyKeyboard = styled.img`
  width: 100%;
  transform: translateY(-50%);
`;

const DecorationWrapper = styled.div`
  width: 200px;
  position: absolute;
  top: 0;
  left: 45%;
  will-change: transform;
  animation: ${slideDown} ease-out 800ms both;

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;
const Decoration = styled.img`
  width: 100%;
`;

export default LandingPage;

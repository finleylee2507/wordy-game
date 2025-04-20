import styled from 'styled-components';
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

            <Title>WORDY</Title>

            <Description>Get 6 chances to guess a 5-letter word</Description>

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

const WordyLogoWrapper = styled.span`
  display: inline-block;
  width: ${175 / 16}rem;

  @media screen and (max-width: 800px) {
    width: 30%;
  }
`;

const WordyLogo = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
`;

const Title = styled.h1`
  margin-top: 15px;
`;

const Description = styled.h3`
  margin-top: 25px;
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

const WordyKeyboardWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  transform: translateY(100%);

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

const WordyKeyboard = styled.img`
  width: 100%;
  transform: translateY(-50%);
`;

const DecorationWrapper = styled.div`
  width: 200px;
  position: absolute;
  top: 120px;
  left: 45%;
  transform: translateX(-50%);
`;
const Decoration = styled.img`
  width: 100%;
`;

export default LandingPage;

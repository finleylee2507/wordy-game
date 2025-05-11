import wordyLogo from '../../../public/assets/wordy-icon.svg';
import wordyGrid from '../../../public/assets/wordy-grid.png';
import wordyKeyboard from '../../../public/assets/keyboard.png';
import decoration from '../../../public/assets/hexagon-decoration.svg';
import * as S from './LandingPage.styles.ts';
import { useDialog, useGame, useView } from '../../providers';
import { View } from '../../constants.ts';
import { usePageFirstLoad } from '../../hooks';
import * as React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { DialogType, GameStatus } from '../../types.ts';

const LandingPage = () => {
  const { setCurrentView } = useView();
  const { setGameStatus } = useGame();
  const { openDialog } = useDialog();
  const { isPageFirstLoad, markPageAsLoaded } = usePageFirstLoad(View.Landing);
  const handlePlayGame = () => {
    setCurrentView(View.Game);
    setGameStatus(GameStatus.RUNNING);
  };

  const handleShowHelp = () => {
    openDialog(DialogType.INSTRUCTIONS);
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      markPageAsLoaded();
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [markPageAsLoaded]);

  const theme: DefaultTheme = { shouldAnimate: isPageFirstLoad };

  return (
    <ThemeProvider theme={theme}>
      <S.PageWrapper>
        <S.ContentWrapper>
          <S.FlexContainer>
            <S.LeftColumn>
              <S.WordyLogoWrapper>
                <S.WordyLogo src={wordyLogo} alt="Wordy logo" />
              </S.WordyLogoWrapper>

              <S.Title>
                <S.TitleLetter>W</S.TitleLetter>
                <S.TitleLetter>O</S.TitleLetter>
                <S.TitleLetter>R</S.TitleLetter>
                <S.TitleLetter>D</S.TitleLetter>
                <S.TitleLetter>Y</S.TitleLetter>
              </S.Title>

              <S.Description>
                <S.DescriptionWord>Get</S.DescriptionWord>{' '}
                <S.DescriptionWord>6</S.DescriptionWord>{' '}
                <S.DescriptionWord>chances</S.DescriptionWord>{' '}
                <S.DescriptionWord>to</S.DescriptionWord>{' '}
                <S.DescriptionWord>guess</S.DescriptionWord>{' '}
                <S.DescriptionWord>a</S.DescriptionWord>{' '}
                <S.DescriptionWord>5-letter</S.DescriptionWord>{' '}
                <S.DescriptionWord>word</S.DescriptionWord>
              </S.Description>

              <S.ButtonContainer>
                <S.ButtonWrapper>
                  <S.CtaButton
                    variant="filled"
                    color="green-dark"
                    size="medium"
                    onClick={handlePlayGame}
                  >
                    Play
                  </S.CtaButton>
                </S.ButtonWrapper>

                <S.ButtonWrapper>
                  <S.CtaButton
                    variant="outlined"
                    color="green-dark"
                    size="medium"
                    onClick={handleShowHelp}
                  >
                    How to play
                  </S.CtaButton>
                </S.ButtonWrapper>
              </S.ButtonContainer>
            </S.LeftColumn>
            <S.RightColumn>
              <S.WordyGridWrapper>
                <S.WordyGrid src={wordyGrid} alt="Wordy grid" />
              </S.WordyGridWrapper>
            </S.RightColumn>
          </S.FlexContainer>
          <S.WordyKeyboardWrapper>
            <S.WordyKeyboard src={wordyKeyboard} alt="Wordy keyboard" />
          </S.WordyKeyboardWrapper>

          <S.DecorationWrapper>
            <S.Decoration src={decoration} />
          </S.DecorationWrapper>
        </S.ContentWrapper>
      </S.PageWrapper>
    </ThemeProvider>
  );
};

export default LandingPage;

import * as React from 'react';
import { useEffect } from 'react';
import * as S from './Game.styles.ts';
import { Grid, NavBar, VisualKeyboard } from '../../components';
import { useGame } from '../../providers';

const Game: React.FC = () => {
  const {
    commitCurrentGuess,
    removeLastLetterFromCurrentGuess,
    addLetterToCurrentGuess,
    currentGuess
  } = useGame();
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey || event.altKey) {
        //skip modifier keys
        return;
      }
      const pressedKey = event.key.toUpperCase();
      if (pressedKey === 'ENTER') {
        commitCurrentGuess();
        return;
      }

      if (pressedKey === 'BACKSPACE') {
        removeLastLetterFromCurrentGuess();
        return;
      }

      if (/^[A-Z]$/.test(pressedKey)) {
        addLetterToCurrentGuess(pressedKey);
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    addLetterToCurrentGuess,
    commitCurrentGuess,
    currentGuess.length,
    removeLastLetterFromCurrentGuess
  ]);

  return (
    <S.Wrapper>
      <S.MaxWidthWrapper>
        <NavBar />
        <Grid />
        <VisualKeyboard />
      </S.MaxWidthWrapper>
    </S.Wrapper>
  );
};

export default Game;

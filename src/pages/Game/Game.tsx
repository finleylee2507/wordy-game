import * as React from 'react';
import * as S from './Game.styles.ts';
import { Grid, NavBar, VisualKeyboard } from '../../components';

const Game: React.FC = () => {
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

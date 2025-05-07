import * as React from 'react';
import * as S from './Grid.styles.ts';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.ts';
import { GridCell } from '../GridCell';
import { range } from '../../utils.ts';

const Grid: React.FC = () => {
  return (
    <S.Wrapper>
      {range(NUM_OF_GUESSES_ALLOWED).map((_, index) => {
        return (
          <S.GridRow key={index}>
            {range(5).map((_, index) => {
              return <GridCell status="unfilled" key={index} fontSize={30} />;
            })}
          </S.GridRow>
        );
      })}
    </S.Wrapper>
  );
};

export default Grid;

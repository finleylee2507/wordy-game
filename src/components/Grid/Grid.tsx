import * as React from 'react';
import * as S from './Grid.styles.ts';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.ts';
import { GridCell } from '../GridCell';
import { range } from '../../utils.ts';
import { useGame } from '../../providers';
import { CellStatus, GuessWithStatus } from '../../types.ts';

type UnfilledCell = {
  type: 'unfilled';
  letter: null;
  status: 'unfilled';
};

type FilledCell = {
  type: 'filled';
  letter: string;
  status: Exclude<CellStatus, 'unfilled'>;
};

type CellContent = UnfilledCell | FilledCell;

const getCurrentRowContent = ({
  currentGuess,
  currentGuessIndex,
  currentRowIndex,
  committedGuesses
}: {
  currentGuess: string;
  currentGuessIndex: number;
  currentRowIndex: number;
  committedGuesses: GuessWithStatus[];
}): CellContent[] => {
  //display current guess in unstyled or unfilled status
  if (currentRowIndex === currentGuessIndex) {
    return range(5).map((_, index) => {
      if (index < currentGuess.length) {
        return {
          type: 'filled',
          letter: currentGuess[index],
          status: 'unstyled'
        };
      }

      return {
        type: 'unfilled',
        letter: null,
        status: 'unfilled'
      };
    });
  }

  //display unfilled cells for future guesses
  if (currentRowIndex > currentGuessIndex) {
    return Array(5).fill({
      type: 'unfilled',
      letter: null,
      status: 'unfilled'
    });
  }

  //display guess status for past guesses
  //TODO: check guess against answer (either here or at commit time)
  return range(5).map((_, index) => {
    const committedGuess = committedGuesses[currentRowIndex];
    return {
      type: 'filled',
      letter: committedGuess[index].letter,
      status: committedGuess[index].status
    };
  });
};

const Grid: React.FC = () => {
  const { currentGuess, currentGuessIndex, committedGuesses } = useGame();
  return (
    <S.Wrapper>
      {range(NUM_OF_GUESSES_ALLOWED).map((_, index) => {
        //determine row content (extract to function)
        const cellContents = getCurrentRowContent({
          currentRowIndex: index,
          currentGuess,
          currentGuessIndex,
          committedGuesses
        });
        return (
          <S.GridRow key={index}>
            {cellContents.map(({ letter, status, type }, index) => {
              if (type === 'unfilled') {
                return <GridCell status={status} key={index} fontSize={30} />;
              }

              return (
                <GridCell
                  status={status}
                  letter={letter}
                  key={index}
                  fontSize={30}
                />
              );
            })}
          </S.GridRow>
        );
      })}
    </S.Wrapper>
  );
};

export default Grid;

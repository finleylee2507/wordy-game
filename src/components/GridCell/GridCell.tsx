import * as React from 'react';
import { CSSProperties } from 'react';
import * as S from './GridCell.styles.ts';

type GridCellProps =
  | { status: 'unfilled'; fontSize?: number }
  | {
      status: 'correct' | 'incorrect' | 'misplaced' | 'unstyled';
      letter: string;
      fontSize?: number;
    };

const COLORS = {
  correct: {
    textColor: 'var(--color-white)',
    backgroundColor: 'var(--color-green-500)',
    borderColor: 'transparent'
  },
  incorrect: {
    textColor: 'var(--color-white)',
    backgroundColor: 'var(--color-gray-500)',
    borderColor: 'transparent'
  },
  misplaced: {
    textColor: 'var(--color-white)',
    backgroundColor: 'var(--color-yellow)',
    borderColor: 'transparent'
  },
  unstyled: {
    textColor: 'var(--color-black)',
    backgroundColor: 'var(--color-white)',
    borderColor: 'var(--color-gray-200)'
  },
  unfilled: {
    textColor: 'unset',
    backgroundColor: 'var(--color-gray-100)',
    borderColor: 'transparent'
  }
};

const GridCell: React.FC<GridCellProps> = props => {
  const { status, fontSize } = props;

  const letter = status === 'unfilled' ? undefined : props.letter;

  const calculatedFontSize = fontSize ?? 16;
  const calculatedPaddings = calculatedFontSize / 1.5;
  const calculatedWidth = calculatedFontSize + 2 * calculatedPaddings;

  const styles = {
    '--font-size': `${calculatedFontSize}px`,
    '--width': `${calculatedWidth}px`,
    '--text-color': `${COLORS[status].textColor}`,
    '--border-color': `${COLORS[status].borderColor}`,
    '--background-color': `${COLORS[status].backgroundColor}`
  } as CSSProperties;

  return (
    <S.Wrapper style={styles}>
      <S.Content>{letter}</S.Content>
    </S.Wrapper>
  );
};

export default GridCell;

import * as React from 'react';
import * as S from './VisualKeyboard.styles.ts';
import { Icon } from '../Icon';
import { useGame } from '../../providers';

const FIRST_ROW = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const SECOND_ROW = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const THIRD_ROW = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'backspace'];

const SPECIAL_KEYS = ['ENTER', 'backspace'];

const KEYBOARD_CELL_SIZE = 20;

const COLORS = {
  correct: {
    textColor: 'var(--color-white)',
    backgroundColor: 'var(--color-green-500)'
  },
  incorrect: {
    textColor: 'var(--color-white)',
    backgroundColor: 'var(--color-gray-500)'
  },
  misplaced: {
    textColor: 'var(--color-white)',
    backgroundColor: 'var(--color-yellow)'
  },
  unstyled: {
    textColor: 'var(--color-gray-700)',
    backgroundColor: 'var(--color-gray-100)'
  }
};

type KeyboardCellProps = {
  status: 'correct' | 'incorrect' | 'misplaced' | 'unstyled';
  fontSize?: number;
  isSpecialKey?: boolean;
  onClick?: () => void;
};

const KeyboardCell: React.FC<React.PropsWithChildren<KeyboardCellProps>> = ({
  children,
  status,
  fontSize = 24,
  isSpecialKey = false,
  onClick
}) => {
  // Calculate dimensions based on font size
  const baseCellWidth = fontSize * 2.2; // Base width for standard keys
  const baseCellHeight = fontSize * 3.2; // Height for all keys
  const specialKeyWidth = fontSize * 4.5; // Wider for special keys

  const cellWidth = isSpecialKey ? specialKeyWidth : baseCellWidth;

  const styles = {
    '--text-color': COLORS[status].textColor,
    '--background-color': COLORS[status].backgroundColor,
    '--font-size': `${fontSize}px`,
    '--cell-width': `${cellWidth}px`,
    '--cell-height': `${baseCellHeight}px`,
    width: `${cellWidth}px`,
    height: `${baseCellHeight}px`
  } as React.CSSProperties;

  return (
    <S.CellWrapper style={styles} onClick={onClick}>
      <S.CellContent>{children}</S.CellContent>
    </S.CellWrapper>
  );
};

const VisualKeyboard: React.FC = () => {
  const {
    addLetterToCurrentGuess,
    commitCurrentGuess,
    removeLastLetterFromCurrentGuess,
    letterStatus
  } = useGame();

  const getOnClickHandler = (key: string) => {
    if (key === 'ENTER') {
      return () => {
        commitCurrentGuess();
      };
    }

    if (key === 'backspace') {
      return () => {
        removeLastLetterFromCurrentGuess();
      };
    }

    return () => {
      addLetterToCurrentGuess(key);
    };
  };

  const getLetterStatus = (letter: string) => {
    return letterStatus[letter] ?? 'unstyled';
  };

  return (
    <S.KeyboardWrapper>
      <S.KeyboardRow>
        {FIRST_ROW.map((letter, index) => (
          <KeyboardCell
            status={getLetterStatus(letter)}
            key={index}
            fontSize={KEYBOARD_CELL_SIZE}
            onClick={getOnClickHandler(letter)}
          >
            {letter}
          </KeyboardCell>
        ))}
      </S.KeyboardRow>

      <S.KeyboardRow>
        {SECOND_ROW.map((letter, index) => (
          <KeyboardCell
            status={getLetterStatus(letter)}
            key={index}
            fontSize={KEYBOARD_CELL_SIZE}
            onClick={getOnClickHandler(letter)}
          >
            {letter}
          </KeyboardCell>
        ))}
      </S.KeyboardRow>

      <S.KeyboardRow>
        {THIRD_ROW.map((letter, index) => {
          return (
            <KeyboardCell
              status={getLetterStatus(letter)}
              key={index}
              fontSize={KEYBOARD_CELL_SIZE}
              isSpecialKey={SPECIAL_KEYS.includes(letter)}
              onClick={getOnClickHandler(letter)}
            >
              {letter === 'backspace' ? (
                <Icon id="backspace" size={30} />
              ) : (
                letter
              )}
            </KeyboardCell>
          );
        })}
      </S.KeyboardRow>
    </S.KeyboardWrapper>
  );
};

export default VisualKeyboard;

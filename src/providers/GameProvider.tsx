import { GameStatus, GuessWithStatus, LetterStatus } from '../types.ts';
import { checkGuess, pickRandomWord } from '../game-helpers.ts';
import { NUM_OF_GUESSES_ALLOWED } from '../constants.ts';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react';
import { useDialog } from './DialogProvider.tsx';

type GameContextProps = {
  gameStatus: GameStatus;
  currentGuess: string;
  committedGuesses: GuessWithStatus[];
  letterStatus: Record<string, LetterStatus>;
  currentGuessIndex: number;
  addLetterToCurrentGuess: (letter: string) => void;
  commitCurrentGuess: () => void;
  removeLastLetterFromCurrentGuess: () => void;
  setGameStatus: (gameStatus: GameStatus) => void;
};

const GameContext = createContext<GameContextProps | undefined>(undefined);

//TODO: explore reducers
export const GameProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  //TODO: fetch from API later
  const [answer, setAnswer] = useState(() => {
    return pickRandomWord();
  });
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.IDLE);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [committedGuesses, setCommittedGuesses] = useState<GuessWithStatus[]>(
    []
  );

  const { activeDialogs } = useDialog();

  const currentGuessIndex = committedGuesses.length;
  const isAnyDialogActive = activeDialogs.length > 0;

  const letterStatus: Record<string, LetterStatus> = useMemo(
    () =>
      committedGuesses.reduce(
        (acc: Record<string, LetterStatus>, currGuessWithStatus) => {
          const nextAcc = { ...acc };

          currGuessWithStatus.forEach(({ letter, status }) => {
            if (status === 'correct') {
              nextAcc[letter] = status;
              return;
            }

            if (nextAcc[letter] === 'correct') {
              return;
            }

            nextAcc[letter] = status;
          });

          return nextAcc;
        },
        {}
      ),
    [committedGuesses]
  );

  const addLetterToCurrentGuess = useCallback(
    (letter: string) => {
      if (gameStatus !== GameStatus.RUNNING || currentGuess.length >= 5) {
        return;
      }

      //disable game input when any dialog is opened
      if (isAnyDialogActive) {
        return;
      }
      setCurrentGuess(currentGuess + letter.toUpperCase());
    },
    [currentGuess, gameStatus, isAnyDialogActive]
  );

  const removeLastLetterFromCurrentGuess = useCallback(() => {
    if (gameStatus !== GameStatus.RUNNING) {
      return;
    }

    //disable game input when any dialog is opened
    if (isAnyDialogActive) {
      return;
    }

    if (currentGuess.length > 0) {
      setCurrentGuess(currentGuess.slice(0, -1));
    }
  }, [currentGuess, gameStatus, isAnyDialogActive]);

  const commitCurrentGuess = useCallback(() => {
    if (gameStatus !== GameStatus.RUNNING) {
      return;
    }

    //disable game input when any dialog is opened
    if (isAnyDialogActive) {
      return;
    }

    if (currentGuess.length !== 5) {
      //TODO: add validation feedback
      return;
    }

    const currentGuessWithStatus: GuessWithStatus =
      checkGuess(currentGuess, answer) ?? [];

    const newCommittedGuesses = [...committedGuesses, currentGuessWithStatus];

    if (currentGuess === answer) {
      setGameStatus(GameStatus.WON);
    } else if (newCommittedGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(GameStatus.LOSE);
    }

    setCommittedGuesses(newCommittedGuesses);
    setCurrentGuess('');
  }, [answer, committedGuesses, currentGuess, gameStatus, isAnyDialogActive]);

  const providedValue = useMemo(() => {
    return {
      gameStatus,
      currentGuess,
      letterStatus,
      committedGuesses,
      currentGuessIndex,
      addLetterToCurrentGuess,
      removeLastLetterFromCurrentGuess,
      commitCurrentGuess,
      setGameStatus
    };
  }, [
    addLetterToCurrentGuess,
    commitCurrentGuess,
    committedGuesses,
    currentGuess,
    currentGuessIndex,
    gameStatus,
    letterStatus,
    removeLastLetterFromCurrentGuess
  ]);

  return (
    <GameContext.Provider value={providedValue}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('useGame() must be used within the GameProvider! ');
  }

  return context;
};

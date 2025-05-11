export type CellStatus =
  | 'correct'
  | 'incorrect'
  | 'misplaced'
  | 'unstyled'
  | 'unfilled';

export type LetterStatus = Exclude<CellStatus, 'unstyled' | 'unfilled'>;

export type GuessWithStatus = { letter: string; status: LetterStatus }[];

export enum GameStatus {
  IDLE = 'idle',
  RUNNING = 'running',
  WON = 'won',
  LOSE = 'lose'
}

export enum DialogType {
  INSTRUCTIONS = 'instructions-dialog'
}

export type DialogData = Record<string, never>;

export type DialogInstance = {
  id: string;
  dialogType: DialogType;
  data?: DialogData;
};

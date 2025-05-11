import { DialogData, DialogType } from '../../types.ts';
import { ComponentType } from 'react';
import { InstructionsDialog } from '../InstructionsDialog';

type DialogComponentProps = {
  isOpen: boolean;
  onDismiss: () => void;
  data?: DialogData;
};

export const DIALOG_REGISTRY: Record<
  DialogType,
  ComponentType<DialogComponentProps>
> = {
  [DialogType.INSTRUCTIONS]: InstructionsDialog
};

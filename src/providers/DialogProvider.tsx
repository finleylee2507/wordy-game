import { DialogData, DialogInstance, DialogType } from '../types.ts';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react';
import * as React from 'react';

type DialogContextProps = {
  activeDialogs: DialogInstance[];
  openDialog: (dialogType: DialogType, data?: DialogData) => void;
  closeDialog: (dialogType: DialogType) => void;
  isDialogActive: (dialogType: DialogType) => boolean;
};

const DialogContext = createContext<DialogContextProps | undefined>(undefined);

export const DialogProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const [activeDialogs, setActiveDialogs] = useState<DialogInstance[]>([]);

  const openDialog = useCallback(
    (dialogType: DialogType, data?: DialogData) => {
      const id = crypto.randomUUID();
      setActiveDialogs([...activeDialogs, { id, dialogType, data }]);
    },
    [activeDialogs]
  );

  const closeDialog = useCallback(
    (dialogType: DialogType) => {
      const nextActiveDialogs = activeDialogs.filter(
        dialog => dialog.dialogType !== dialogType
      );

      setActiveDialogs(nextActiveDialogs);
    },
    [activeDialogs]
  );

  const isDialogActive = useCallback(
    (dialogType: DialogType) => {
      return activeDialogs.some(dialog => dialog.dialogType === dialogType);
    },
    [activeDialogs]
  );

  const providedValue = useMemo(
    () => ({ activeDialogs, openDialog, closeDialog, isDialogActive }),
    [activeDialogs, openDialog, closeDialog, isDialogActive]
  );

  return (
    <DialogContext.Provider value={providedValue}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error('useDialog() must be used within the DialogProvider! ');
  }

  return context;
};

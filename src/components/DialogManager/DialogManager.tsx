import { useDialog } from '../../providers';
import { DIALOG_REGISTRY } from './DialogRegistry.ts';

const DialogManager = () => {
  const { activeDialogs, closeDialog } = useDialog();

  if (activeDialogs.length === 0) {
    return null;
  }

  return (
    <>
      {activeDialogs.map(dialog => {
        const { dialogType, data, id } = dialog;

        const DialogComponent = DIALOG_REGISTRY[dialogType];

        if (!DialogComponent) {
          console.warn(`No dialog found for dialog type :${dialogType}`);
          return null;
        }

        return (
          <DialogComponent
            isOpen={true}
            onDismiss={() => {
              closeDialog(dialogType);
            }}
            key={id}
            {...data}
          />
        );
      })}
    </>
  );
};

export default DialogManager;

import * as React from 'react';
import { View } from '../constants.ts';

type ViewContextProps = {
  currentView: View;
};

const ViewContext = React.createContext<ViewContextProps | undefined>(
  undefined
);

export const ViewProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const [currentView, setCurrentView] = React.useState<View>(View.Landing);

  const providedValue = React.useMemo(
    () => ({
      currentView,
      setCurrentView
    }),
    [currentView]
  );
  return (
    <ViewContext.Provider value={providedValue}>
      {children}
    </ViewContext.Provider>
  );
};

export const useView = () => {
  const context = React.useContext(ViewContext);

  if (!context) {
    throw new Error('useView() must be used within the ViewProvider! ');
  }

  return context;
};

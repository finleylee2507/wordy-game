import * as React from 'react';
import { View } from '../constants.ts';
import { createContext, useContext, useMemo, useState } from 'react';

type ViewContextProps = {
  currentView: View;
  setCurrentView: (view: View) => void;
};

const ViewContext = createContext<ViewContextProps | undefined>(undefined);

export const ViewProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const [currentView, setCurrentView] = useState<View>(View.Landing);

  const providedValue = useMemo(
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
  const context = useContext(ViewContext);

  if (!context) {
    throw new Error('useView() must be used within the ViewProvider! ');
  }

  return context;
};

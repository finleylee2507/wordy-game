import GlobalStyles from './components/GlobalStyles';
import { ViewManager } from './components/ViewManager';
import { DialogProvider, GameProvider, ViewProvider } from './providers';
import DialogManager from './components/DialogManager/DialogManager.tsx';

function App() {
  return (
    <DialogProvider>
      <GameProvider>
        <ViewProvider>
          <ViewManager />
          <GlobalStyles />
          <DialogManager />
        </ViewProvider>
      </GameProvider>
    </DialogProvider>
  );
}

export default App;

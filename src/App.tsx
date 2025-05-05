import GlobalStyles from './components/GlobalStyles';
import { ViewManager } from './components/ViewManager';
import { ViewProvider } from './providers';

function App() {
  return (
    <ViewProvider>
      <ViewManager />
      <GlobalStyles />
    </ViewProvider>
  );
}

export default App;

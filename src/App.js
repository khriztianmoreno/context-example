
import { Padre } from './Padre';

import { ThemeProvider } from './ThemeContext'
function App() {
  return (
    <ThemeProvider>
      <Padre />
    </ThemeProvider>
  );
}

export default App;

import '../src/App.css';
import { AppHeader } from './components/AppHeader';
import { AppMain } from './components/AppMain';
import TodoLogic from './components/TodoLogic';

function App() {
  return (
    <>
      <TodoLogic>
        <AppHeader />
        <AppMain />
      </TodoLogic>
    </>
  );
}

export default App;

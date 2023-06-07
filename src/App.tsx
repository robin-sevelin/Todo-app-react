import '../src/App.css';
import { AppFooter } from './components/AppFooter';
import { AppHeader } from './components/AppHeader';
import { AppMain } from './components/AppMain';

function App() {
  return (
    <>
      <AppHeader content='Todo' />
      <AppMain content='lets add some todos..to do' />
      <AppFooter content='' />
    </>
  );
}

export default App;

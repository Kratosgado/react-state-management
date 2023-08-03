import './App.css';
import { AppProvider } from './AppContext';
import { Header } from './Header';
import { Main } from './Main';

function App() {
  
  return (
    <div className='max-w-7x1 mx-auto px-4'>
      <AppProvider>
        <Header />
        <Main />
      </AppProvider>
    </div>
  );
}

export default App;

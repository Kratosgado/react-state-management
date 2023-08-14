import { Provider } from 'react-redux'
import {store} from './store/store'

import './App.css';
import { Header } from './Header';
import { Main } from './Main';

function App() {
  
  return (
    <div className='max-w-7x1 mx-auto px-4'>
      <Provider store={store}>
        <Header />
        <Main />
      </Provider>
    </div>
  );
}

export default App;

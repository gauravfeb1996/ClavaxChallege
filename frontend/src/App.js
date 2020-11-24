import './App.css';

import { store } from './store/store';
import { Provider } from 'react-redux';
import Main from './Screens/Main';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Main />
      </div>
    </Provider>
  );
}

export default App;

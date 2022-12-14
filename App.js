import * as React from 'react';
import MovieApp from './components/movieapp';
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return(
    <Provider store={store}>
      <MovieApp/>
    </Provider>
  );
}

export default App;


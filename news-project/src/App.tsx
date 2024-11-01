import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import SearchBar from './SearchBar';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>News Search</h1>
        <SearchBar />
      </div>
    </Provider>
  );
};

export default App;

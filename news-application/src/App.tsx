import React from 'react';
import News from './components/News';
import 'devextreme/dist/css/dx.dark.css'; 

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Welcome to  News</h1>
      <News />
    </div>
  );
};

export default App;

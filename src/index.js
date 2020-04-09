import React from 'react';
import ReactDOM from 'react-dom';
import AnimalForm from './components/AnimalForm';

import './styles.css';

function App() {
  return (
    <div className="App">
      Add New Animal
      <AnimalForm />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

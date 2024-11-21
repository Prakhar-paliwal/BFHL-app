import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResponseViewer from './components/ResponseViewer';
import './App.css';

function App() {
  const [response, setResponse] = useState(null);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>BFHL TESTING</h1>
      </header>
      <main className="app-main">
        <InputForm setResponse={setResponse} />
        {response ? (
          <ResponseViewer response={response} />
        ) : (
          <p className="no-response">Submit the form to see the response!</p>
        )}
      </main>
      <footer className="app-footer">
        <p>&copy;BFHL Challenge</p>
      </footer>
    </div>
  );
}

export default App;

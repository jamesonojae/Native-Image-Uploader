import logo from './logo.svg';
import './base.css';
import Upload from './components/cloudinary-upload/Upload';
import Home from './components/Home';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Upload />
    </div>
  );
}

export default App;

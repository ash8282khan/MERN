import React from 'react';

import ReactDOM from 'react-dom/client';
import Navbar from './navbar';
import Homepage from './homepage';
import './style.css';

const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
    </div>
  );
}

root.render(<App/>);
// export default App;

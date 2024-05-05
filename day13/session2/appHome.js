//------------------homemage-----------------

import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './src/pages/homepage/homepage.js';

const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);


const App = () => {
    return <Homepage />
}

root.render(<App/>);
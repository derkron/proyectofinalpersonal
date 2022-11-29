import React from 'react';
import ReactDOM from 'react-dom/client';
import { Menu } from './Shared/Menu/Menu';
import { Home } from './Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu></Menu>
    <Home/>
    
  </React.StrictMode>
);




import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import Language from './component/multiLanguage/Language';
import Navbar from './component/layout/Navbar';

const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });
  return (
    <div>
      <Navbar />
      <Language />
    </div>
  );
};

export default App;

import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Aos from 'aos';
import './App.css';
import FirstSec from './assets/pages/Home/sections/firstsec';
import SecondSec from './assets/pages/Home/sections/secondsec';
import ThirdSec from './assets/pages/Home/sections/thirdsec';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <FirstSec />
      <SecondSec />
      <ThirdSec />

    </>
  );
}

export default App;

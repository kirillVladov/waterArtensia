import logo from './logo.svg';
import './App.css';
import Header from './components/header/component';
import FullScreen from './components/fullScreen/component';
import { NextUIProvider } from '@nextui-org/react';
import { useState } from 'react';
import Shares from './components/shares/component';
import Brands from './components/brands/component';

function App() {
  const links = {
    '/' : 'Главная' // TODO сделать глобальной
  }
  window.links = links

  const [controller, setController] = useState({})

  return (
  <NextUIProvider>
      <div id="mainBlock" className="App" data-theme='white'>
        <Header />
        <FullScreen />
        <Shares />
        <Brands />
      </div>
  </NextUIProvider>
  );
}

export default App;

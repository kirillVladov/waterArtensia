import logo from './logo.svg';
import './App.css';
import Header from './components/header/component';
import FullScreen from './components/fullScreen/component';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Loggin from './Pages/logginPage/component';
import MainPage from './Pages/Main/component'



function App() {
  const links = {
    '/' : {
        name: 'Main',
        component: <MainPage /> 
    },
    '/loggin' : {
        name: 'loggin',
        component: <Loggin /> 
    },
  }// TODO сделать глобальной
  window.links = links

  const [controller, setController] = useState({})

  return (
      <div id="mainBlock" className="App" data-theme='white'>
        <BrowserRouter>
          <Header />
            <div className='content-wrapper'>
          <Routes>
              {
                Object.entries(links).map(([key, values]) => (
                    <Route path={key} element={values.component} />
                ))
              }
            </Routes>
            </div>
        </BrowserRouter>
      </div>
  );
}

export default App;

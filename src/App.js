import logo from './logo.svg';
import './App.css';
import Header from './components/header/component';
import FullScreen from './components/fullScreen/component';

function App() {
  const links = {
    '/' : 'Главная' // TODO сделать глобальной
  }
  window.links = links

  return (
    <div id="mainBlock" className="App" data-theme='white'>
     <Header />
     <FullScreen />
     fjdskfjhdsfjk fjdskfjhdsfjk fjdskfjhdsfjk fjdskfjhdsfjk fjdskfjhdsfjk fjdskfjhdsfjk fjdskfjhdsfjk fjdskfjhdsfjk fjdskfjhdsfjk fjdskfjhdsfjk fjdskfjhdsfjk fjdskfjhdsfjk fjdskfjhdsfjk fjdskfjhdsfjk fjdskfjhdsfjk fjdskfjhdsfjk fjdskfjhdsfjk 
    </div>
  );
}

export default App;

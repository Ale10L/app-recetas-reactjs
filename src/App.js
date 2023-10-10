import './App.css';
import Header from './components/Header/Header';
import './fuentes/Lemon-Regular.ttf'

function App({ children }) {
  return (
    <div className="">
      <header className=''>
        <Header />
      </header>
      <footer>Acá viene el footer</footer>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header/Header';
import './fuentes/Lemon-Regular.ttf'
import ContactForm from './ContactForm';

function App({ children }) {
  return (
    <div className="">
      <ContactForm />
      <header className=''>
        <Header />
      </header>
      <footer>Acá viene el footer</footer>
    </div>
  );
}

export default App;

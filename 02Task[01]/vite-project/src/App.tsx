import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Footer from './components/footer/footer';

function App() {
  const navbar = {
    head: 'Navbar',
    body: 'Navbar area'
  },
  home = {
    head: 'Home',
    body: 'Home area'
  },
  footer = {
    head: 'Footer',
    body: 'Footer area'
  };

  return (
    <div className="App">
      <nav>
        <Navbar {...navbar}/>
      </nav>
      <main>
        <Home {...home}/>
      </main>
      <footer>
        <Footer {...footer}/>
      </footer>
    </div>
  )
}

export default App

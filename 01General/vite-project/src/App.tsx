import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './components/home';

function App() {

  const click = () => {
    console.log('clicked');
  }


  return (
    <div className="App" onClick={click}>
      <nav>
        <Navbar websiteName='day03.com' surname='Page' />
      </nav>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App

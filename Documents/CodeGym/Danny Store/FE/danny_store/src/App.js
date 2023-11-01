import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <>
      <Login />
      <Header />
      <Home />
      <div style={{ height: "500px" }}></div>
      <Footer />
    </>
  );
}

export default App;

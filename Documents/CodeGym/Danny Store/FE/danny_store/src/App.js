import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Detail from './components/Detail';
import QuantityHandler from './components/common/QuantityHandler';
import Input from './components/common/Input';
import Cart from './components/Cart';

function App() {
  return (
    <>

      {/* <Login /> */}
      <Header />
      {/* <Home /> */}
      {/* <Detail /> */}
      <Cart />
      <Footer />
    </>
  );
}

export default App;

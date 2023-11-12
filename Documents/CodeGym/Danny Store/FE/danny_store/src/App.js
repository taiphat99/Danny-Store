import logo from './logo.svg';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/home/Home';

import Error401 from './components/user/Error401';
import Error403 from './components/user/Error403';
import Login from './components/user/Login';
import List from './components/home/List';
import Detail from './components/home/Detail';
import { axiosClient } from './service/AxiosClient';

function App() {
  axiosClient();
  // Lưu jwt lên localstorage
  return (
    <>
      <ToastContainer></ToastContainer>

      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/401" element={<Error401 />} />
        <Route path="/403" element={<Error403 />} />
        <Route path="/login" element={<Login />} />

        <Route path='/home' element={<Home />} />
        <Route path="/list/" element={<List />} />
        <Route path="/list/:type" element={<List />} />
        <Route path="/detail" element={<Detail />} />

        <Route path="/detail/:type/:id" element={<Detail />} />
      </Routes>

    </>
  );
}

export default App;

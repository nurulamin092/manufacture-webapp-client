import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import SignIn from './Pages/Login/SignIn';
import Footer from './Pages/Shared/Footer';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
// import AddProduct from './Pages/Home/AddProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageNotFound from './Pages/Shared/PageNotFound';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyReview from './Pages/Dashboard/MyReview';
function App() {

  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/addProduct" element={<RequireAuth><AddProduct /></RequireAuth>} /> */}
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>}>
          <Route path='myReview' element={<MyReview></MyReview>}></Route>
        </Route>
        <Route path="about" element={<RequireAuth><About /></RequireAuth>} />
        <Route path='signup' element={<SignUp />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path='*' element={<PageNotFound></PageNotFound>} />
      </Routes>

      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;

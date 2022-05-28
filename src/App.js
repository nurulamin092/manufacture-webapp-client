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
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageAllProduct from './Pages/Dashboard/ManageAllProduct';
function App() {

  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>}>
          <Route path='myReview' element={<MyReview></MyReview>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='allProduct' element={<RequireAdmin><ManageAllProduct></ManageAllProduct></RequireAdmin>}></Route>
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

import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Cart from './components/Cart';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import ProtectedRoute from './utils/ProtectedRoute'; // Import ProtectedRoute
import PublicOnlyRoute from './utils/PublicOnlyRoute'; 
import { store } from './components/redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> */}
<Route path="/" element={
            <PublicOnlyRoute>
              <SignUp />
            </PublicOnlyRoute>
          } />
          <Route path="/login" element={
            <PublicOnlyRoute>
              <Login />
            </PublicOnlyRoute>
          } />


          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/products" element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          } />
          <Route path="/product/:id" element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          } />
          <Route path="/cart" element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

//--------------------------------------------

// import React from 'react';
// import './App.css';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignUp from './components/SignUp';
// import Login from './components/Login';
// import Cart from './components/Cart';
// import Products from './components/Products';
// import ProductDetails from './components/ProductDetails';
// import Navbar from './components/Navbar';
// import { store } from './components/redux/store'; // Import the Redux store

// const App: React.FC = () => {
//   return (
//     <Provider store={store}>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<SignUp />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/product/:id" element={<ProductDetails />} />
//           <Route path="/cart" element={<Cart />} />
//         </Routes>
//       </Router>
//     </Provider>
//   );
// };

// export default App;




////////////////////////////////////

/*

// App.tsx

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Cart from './components/Cart';

import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import { store } from './components/redux/store'; // Import the Redux store

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route  path="/" element={<SignUp />} />
            <Route  path="/login" element={<Login />} />
            <Route  path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;




*/
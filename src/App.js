import React from 'react';
import { useSelector } from 'react-redux';
import Blogs from './component/Blogs';
import HomePage from './component/HomePage';
import Navbar from './component/Navbar';
import { selectSignedIn } from './features/userSlice';
import "./styling/App.css"

const App = () => {

  const isSignedIn = useSelector(selectSignedIn);
  return (
    <div className="app">
      <Navbar />
      <HomePage />
      {isSignedIn && <Blogs />}
    </div>
  );
}

export default App;

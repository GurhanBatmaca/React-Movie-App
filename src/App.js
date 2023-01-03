import { Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import { MovieProvider } from "./context/MovieContext";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">

      <MovieProvider>

        <Navbar />
        <h1>aaa</h1>
        <Routes>

        </Routes>

      </MovieProvider>

    </div>
  );
}

export default App;

import { Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import { MovieProvider } from "./context/MovieContext";

import Navbar from "./components/Navbar";
import Header from "./components/Header/Header";
import Movie from "./components/movie/Movie";


function App() {
  return (
    <div className="App">

      <MovieProvider>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Header />} />
          <Route path={`/movie/:id`} element={<Movie/>}/>
        </Routes>
      </MovieProvider>

    </div>
  );
}

export default App;

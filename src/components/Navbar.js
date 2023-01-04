import { NavLink, useNavigate } from "react-router-dom"; 
import { useState, useContext } from "react";

import MovieContext from "../context/MovieContext";

const Navbar = () => {

  const {search,setSearch,setMainURL,setPage,setActivePage} = useContext(MovieContext);

  const navigate = useNavigate();

  const onChangeInput = (e) => {
      setSearch(e.target.value);
  };
  
  const onSubmitForm = (e) => {
    e.preventDefault();
    if(search === "") {
      return;
    }
    setMainURL(`https://api.themoviedb.org/3/search/multi?api_key=ad9a7b0c1f07914b7f151c86d435af36&language=en-US&query=${search}&page=`);
    setSearch("");
    navigate("/");
  };

  const onMovieChange = (e) => {
    if(e === 1) {
      setPage(1);
      setMainURL(`https://api.themoviedb.org/3/movie/now_playing?api_key=ad9a7b0c1f07914b7f151c86d435af36&language=en-US&page=`);  
      setActivePage("NOW PLAYİNG MOVİES");  
    } else if ( e === 2) {
      setPage(1);
      setMainURL(`https://api.themoviedb.org/3/movie/popular?api_key=ad9a7b0c1f07914b7f151c86d435af36&language=en-US&page=`);
      setActivePage("POPULAR MOVIES MOVİES");  
    } else if ( e === 3) {
      setPage(1);
      setMainURL(`https://api.themoviedb.org/3/movie/top_rated?api_key=ad9a7b0c1f07914b7f151c86d435af36&language=en-US&page=`);
      setActivePage("TOP RATED MOVİES"); 
    } else  {
      setPage(1);
      setMainURL(`https://api.themoviedb.org/3/movie/upcoming?api_key=ad9a7b0c1f07914b7f151c86d435af36&language=en-US&page=`);
      setActivePage("UP COMİNG MOVİES"); 
    }   
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top container py-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>Movie App</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <NavLink className="nav-link active" to={"/"}>Home</NavLink>
            </li> */}
            <li className="nav-item">
              <button onClick={()=> {onMovieChange(1)}} className="nav-link btn btn-outline">NOW PLAYİNG</button>
            </li>
            <li className="nav-item">
              <button onClick={()=> {onMovieChange(2)}} className="nav-link btn btn-outline">POPULAR</button>
            </li>
            <li className="nav-item">
              <button onClick={()=> {onMovieChange(3)}} className="nav-link btn btn-outline">TOP RATED</button>
            </li>
            <li className="nav-item">
              <button onClick={()=> {onMovieChange(4)}} className="nav-link btn btn-outline">UP COMİNG</button>
            </li>
            <li className="nav-item dropdown">
              <a disabled className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tv Shows
              </a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to={"/"}>Action</NavLink></li>
                <li><NavLink className="dropdown-item" to={"/"}>Another action</NavLink></li>
                <li><hr className="dropdown-divider"/></li>
                <li><NavLink className="dropdown-item" to={"/"}>Something else here</NavLink></li>
              </ul>
            </li>
          </ul>
          <form onSubmit={onSubmitForm} className="d-flex" role="search">
            <input 
              onChange={onChangeInput} value={search}
              className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            {/* <button  
              onClick={() => navigate("/")}
              className="btn btn-outline-success" type="submit">
              Search
            </button> */}
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
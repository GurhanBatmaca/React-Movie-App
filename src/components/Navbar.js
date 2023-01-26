import { NavLink, useNavigate } from "react-router-dom"; 
import {  useContext, useEffect } from "react";

import MovieContext from "../context/MovieContext";

const Navbar = () => {

  const { state, dispatch } = useContext(MovieContext);

  const navigate = useNavigate();

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(state.search === "") {
      return;
    }
    navigate("/");
    dispatch({
      type: "CHANGE_URL", 
      mainURL: `https://api.themoviedb.org/3/search/multi?api_key=ad9a7b0c1f07914b7f151c86d435af36&language=en-US&query=${state.search}&page=`
    })

  };

  useEffect(() => {
    navigate("/");
  }, [state.mainURL]);

  return (
    <nav className="navbar navbar-expand-lg fixed-top container py-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>Movie App</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button onClick={()=> {dispatch({type: "NOW_PLAYİNG_MOVİES"})} } className="nav-link btn btn-outline">NOW PLAYİNG</button>
            </li>
            <li className="nav-item"> 
              <button onClick={()=> {dispatch({type: "POPULAR_MOVIES"})} } className="nav-link btn btn-outline">POPULAR</button>
            </li>
            <li className="nav-item">
              <button onClick={()=> {dispatch({type: "TOP_RATED_MOVİES"})} } className="nav-link btn btn-outline">TOP RATED</button>
            </li>
            <li className="nav-item">
              <button onClick={()=> {dispatch({type: "UP_COMİNG_MOVİES"})} } className="nav-link btn btn-outline">UP COMİNG</button>
            </li>
            <li className="nav-item dropdown">
              <a disabled className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tv Shows(soon)
              </a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to={"/"}>Action</NavLink></li>
                <li><NavLink className="dropdown-item" to={"/"}>Another action</NavLink></li>
                <li><hr className="dropdown-divider"/></li>
                <li><NavLink className="dropdown-item" to={"/"}>Something else here</NavLink></li>
              </ul>
            </li>
          </ul>
          {/* <div className="dropdown pe-2">
            <button className="btn btn-outline dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Language ( {lang} )<i className="fa-solid fa-globe"></i>
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" type="button">English</button></li>
              <li><button className="dropdown-item" type="button">Türkçe</button></li>

            </ul>
        </div> */}
          <form onSubmit={onSubmitForm} className="d-flex" role="search">
            <input
              onChange={(e) => {dispatch({type: "SEARCH_MOVİE", search: e.target.value})}} value={state.search}
              className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
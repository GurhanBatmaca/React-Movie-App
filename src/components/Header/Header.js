import { useState, useEffect, useContext } from "react";
import MovieContext from "../../context/MovieContext";
import { NavLink } from "react-router-dom";
import styles from './styles.module.css';


const Header = () => {

  const {movies, setMovies,mainURL,page,setPage,activePage} 
  = useContext(MovieContext);

  const onChangePage = (e) => {
    if(e === "+") {
        setPage(page + 1);    
    } else {
        setPage(page - 1); 
    }
};

  useEffect(() => {
    fetch(`${mainURL}${page}`)
      .then(res => res.json())
      .then((data) => {
        setMovies(data.results);
      })
  }, [page,mainURL]);


  return (
    <header className="container">  
        <h2 className="text-center py-2">{activePage}</h2>  
        <ul className="row">

        {
            movies.map((movie) => (
                <li key={movie.id} className={`card col-lg-4 col-md-6 ${styles.my_card}`}>
                    <NavLink to={`/movie/${movie.id}`} >
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="card-img-top" alt={`${movie.title} poster`}/>
                        <div className={`card-body ${styles.my_card_body}  ${styles.text_color}`}>
                            <h5 className="card-title">{movie.title}</h5>
                            <p className={`card-text ${styles.line_clamp}`}>{movie.overview}</p>
                            <p className={`card-text`}>Detail..</p>
                            <p className="card-text">Rating: {movie.vote_average}</p>
                        </div>
                    </NavLink>
                </li>
            ))
        }
        </ul>

        {
        movies.length > 0 && 
        <div className="p-3 ">
          <div className={`text-center {styles.pages}`}>{`< ${movies.length} / ${page} >`}</div>
          <div className={`text-center`}>        
            <button 
              onClick={() => {onChangePage("-")}} className={page > 1 ? "btn m-2 bg-warning" : "btn m-2 bg-dark disabled"}>
              PREV
            </button>
            <button 
              onClick={() => {onChangePage("+")}} className={movies.length === page ? "btn m-2 bg-dark disabled" : "btn m-2 bg-warning"}>
              NEXT
            </button>  
        </div>
      </div>
      }

    </header>
  )
};

export default Header;
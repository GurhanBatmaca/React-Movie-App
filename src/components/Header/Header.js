import { useState, useEffect, useContext } from "react";
import MovieContext from "../../context/MovieContext";
import { NavLink } from "react-router-dom";
import styles from './styles.module.css';


const Header = () => {

  const {movies, setMovies,mainURL,page,setPage,activePage,isLoading,setIsLoading} 
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
        setIsLoading(false);
      })
      console.log(mainURL);
  }, [page,mainURL]);


  return (
    <header className="container">  
        <h2 className="text-center py-2">{activePage}</h2>  
        { isLoading && <h2 className="text-center p-3"><i className="fa-solid fa-spinner"></i>  Loading...</h2> }
        <ul className="row">
        { 
            movies.map((movie) => (
                <li key={movie.id} className={`card col-lg-4 col-md-6 ${styles.my_card}`}>
                    <NavLink to={`/movie/${movie.id}`} className={`${styles.my_card_link}`} >
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="card-img-top" alt={`${movie.title} poster`}/>
                        <div className={`card-body ${styles.my_card_body}  ${styles.text_color}`}>
                            <h5 className={`card-title ${styles.my_card_title}`}>{movie.title}</h5>
                            <p className={`card-text ${styles.line_clamp}`}>{movie.overview}</p>
                            <p className={`card-text`}><span className="me-2">Detail..</span><i className="fa-solid fa-location-arrow"></i></p>
                            <p className="card-text">Rating: <span className={`${styles.raiting}`}>{movie.vote_average}</span></p>
                        </div>
                    </NavLink>
                </li>
            ))
        }
        </ul>

        {
        movies.length > 0 && 
        <div className="p-3 ">
          <div className={`text-center ${styles.pages}`}><i className="fa-solid fa-quote-left fa-2xs"></i>{` ${movies.length} / ${page} `}<i className="fa-solid fa-quote-right fa-2xs"></i></div>
          <div className={`text-center`}>        
            <button 
              onClick={() => {onChangePage("-")}} className={page > 1 ? "btn m-2 bg-info" : "btn m-2 bg-info disabled "}>
              <i className="fa-solid fa-caret-left"></i> PREV
            </button>
            <button 
              onClick={() => {onChangePage("+")}} className={movies.length === page ? "btn m-2 bg-info disabled" : "btn m-2 bg-info"}>
              NEXT <i className="fa-solid fa-caret-right"></i>
            </button>  
        </div>
      </div>
      }

    </header>
  )
};

export default Header;
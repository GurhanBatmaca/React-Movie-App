import { useEffect, useContext } from "react";
import MovieContext from "../../context/MovieContext";
import { NavLink } from "react-router-dom";
import styles from './styles.module.css';

const Header = () => {

  const {state, dispatch} = useContext(MovieContext);

  useEffect(() => {
    fetch(`${state.mainURL}${state.page}`)
      .then(res => res.json())
      .then((data) => {
        dispatch({type:"ADD_MOVİES", movies: data.results})
      })
  }, [state.page,state.mainURL]);


  return (
    <header className="container-lg">  
        <div>
          <h2 className={`text-center py-2 text-focus-in`}>{state.activePage}</h2>  
        </div>
        { state.isLoading && <h2 className="text-center p-3"><i className="fa-solid fa-spinner"></i>  Loading...</h2> }

        <ul className="row">
        { 
            state.movies.map((movie) => (
                <li key={movie.id} className={`card col-lg-4 col-md-6 ${styles.my_card}`}>
                    <NavLink to={`/movie/${movie.id}`} className={`${styles.my_card_link}`} >
                        <div className={`card-img-top ${styles.my_card_img}`}>
                          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.title} poster`}/>
                        </div>
                        <div className={`card-body ${styles.my_card_body}  ${styles.text_color}`}>
                            <h5 className={`card-title ${styles.my_card_title}`}>{movie.title}</h5>
                            <p className={`card-text ${styles.line_clamp}`}>{movie.overview}</p>
                            <p className={`card-text`}><span className="me-2">Details..</span><i className="fa-solid fa-location-arrow"></i></p>
                            <p className={`card-text ${styles.rating}`}><i className="fa-solid fa-star fa-2x"></i> <span className={`${styles.raiting}`}>{movie.vote_average}</span></p>
                        </div>
                    </NavLink>
                </li>
            ))
        }
        </ul>

        {
        state.movies.length > 0 && 
        <div className="p-3 ">
          <div className={`text-center ${styles.pages}`}><i className="fa-solid fa-quote-left fa-2xs"></i>{` ${state.movies.length} / ${state.page} `}<i className="fa-solid fa-quote-right fa-2xs"></i></div>
          <div className={`text-center`}>        
            <button 
              onClick={() => {dispatch({type: "CHANGE_PAGE_MINUS"})}} className={state.page > 1 ? "btn m-2 bg-info" : "btn m-2 bg-info disabled "}>
              <i className="fa-solid fa-caret-left"></i> PREV
            </button>
            <button 
              onClick={() => dispatch({type: "CHANGE_PAGE_PLUS"})} className={state.movies.length === state.page ? "btn m-2 bg-info disabled" : "btn m-2 bg-info"}>
              NEXT <i className="fa-solid fa-caret-right"></i>
            </button>  
        </div>
      </div>
      }

    </header>
  )
};

export default Header;
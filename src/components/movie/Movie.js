import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieContext from "../../context/MovieContext";
import styles from './styles.module.css';

const Movie = () => {

    const { state, dispatch } = useContext(MovieContext);
    const { id } = useParams();

    const [genres, setGenres] = useState([]);
    const [rate, setRate] = useState(0);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ad9a7b0c1f07914b7f151c86d435af36&language=en-US`)
            .then(res => res.json())
            .then((data) => {
              dispatch({type: "ADD_MOVİE", movie: data})
                console.log(data);
                setGenres(data.genres.map((genre) => {
                  return genre.name ;
                }))
                setRate(data.vote_average)
            })  
                 
    },[id]);
    
    

  return (
    <div className={`card ${styles.my_card}`}>
      <div className='row'>
        <div className={`img-fluid rounded-start ${styles.my_card_img} col-md-6`}>
          <img src={`https://image.tmdb.org/t/p/original${state.movie.poster_path}`}  alt={`${state.movie.title} poster`}/>
        </div>
        <div className={`col-md-6 ${styles.my_card_down} `}>
          <div className={`card-body ${styles.my_card_body} `}>
              <h5 className={`card-title text-center p-3 ${styles.my_card_title}`}>{state.movie.title}</h5>
              <p className={`card-text p-3 ${styles.my_card_overview}`}>{state.movie.overview}</p>
              <p className={`card-text p-3 ${styles.my_card_tagline}`}>{state.movie.tagline}...</p>
              <p className={`card-text p-3`}>Genres: {genres.join(", ")}</p>
              <div className={`${styles.footer} p-3`}>
                <p className={`card-text`}><i className="fa-solid fa-star fa-2x"></i> {rate.toFixed(1)}</p>
                <p className={`card-text`}><i className="fa-solid fa-calendar-days"></i> {state.movie.release_date}</p>
              </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Movie;
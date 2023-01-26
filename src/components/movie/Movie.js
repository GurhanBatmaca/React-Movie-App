import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import MovieContext from "../../context/MovieContext";

const Movie = () => {

    const { state, dispatch } = useContext(MovieContext);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ad9a7b0c1f07914b7f151c86d435af36&language=en-US`)
            .then(res => res.json())
            .then((data) => {
              dispatch({type: "ADD_MOVİE", movie: data})
                // setMovie(data);
            })          
    },[id]);

  return (
    <div className={`card {styles.my_card}`}>
    <img src={`https://image.tmdb.org/t/p/original${state.movie.poster_path}`} className="card-img-top" alt={`${state.movie.title} poster`}/>
    <div className={`card-body {styles.my_card_body}`}>
        <h5 className="card-title">{state.movie.title}</h5>
        <p className="card-text">{state.movie.overview}</p>
        <p className="card-text">Rating: {state.movie.vote_average}</p>
    </div>
</div>
  )
}

export default Movie;
import { createContext, useReducer, useState } from "react";
import { ReduserFn } from "./ReduserFn";

const MovieContext = createContext();

export const MovieProvider = ({children}) => {

    const initinalState = {
        movies: [],
        movie: {},
        page: 1,
        mainURL: `https://api.themoviedb.org/3/movie/now_playing?api_key=ad9a7b0c1f07914b7f151c86d435af36&language=en-US&page=`,
        activePage: "NOW PLAYİNG MOVİES",
        search:"",
        isLoading: true
    }

    const [state, dispatch] = useReducer(ReduserFn,initinalState);

    const [movies, setMovies] = useState([]);
    const [movie ,setMovie] = useState({});
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [mainURL, setMainURL] = 
    useState(`https://api.themoviedb.org/3/movie/now_playing?api_key=ad9a7b0c1f07914b7f151c86d435af36&language=en-US&page=`)
    const [activePage, setActivePage] = useState("NOW PLAYİNG MOVİES");
    const [isLoading, setIsLoading] = useState(true);

    const values = {
        search, setSearch,
        movies, setMovies,
        movie ,setMovie,
        page, setPage,
        // lang, setLang,
        mainURL, setMainURL,
        activePage, setActivePage,
        isLoading, setIsLoading,
        state, dispatch
    }

    return <MovieContext.Provider value={values}>
             {children}
            </MovieContext.Provider>

}

export default MovieContext;
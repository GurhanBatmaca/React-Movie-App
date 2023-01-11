import { createContext, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({children}) => {

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
        isLoading, setIsLoading
    }

    return <MovieContext.Provider value={values}>
             {children}
            </MovieContext.Provider>

}

export default MovieContext;
import { createContext, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({children}) => {

    const [search, setSearch] = useState("");

    const values = {
        search, setSearch
    }

    return <MovieContext.Provider value={values}>{children}</MovieContext.Provider>

}

export default MovieContext;
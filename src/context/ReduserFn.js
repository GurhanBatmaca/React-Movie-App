export const ReduserFn = (state, action) => {

    switch(action.type) {
        case "ADD_MOVİES" :
            return {
                ...state,
                movies: action.movies,
                isLoading: false
            } 
        case "ADD_MOVİE" :
            return {
                ...state,
                movie: action.movie,
                isLoading: false
            }     
        case "CHANGE_URL" :
            return {
                ...state,
                mainURL: action.mainURL,
                search: ""
            }   
        case "CHANGE_PAGE_PLUS" :
            return {
                ...state,
                page: state.page +1
            } 
        case "CHANGE_PAGE_MINUS" :
            return {
                ...state,
                page: state.page -1
            }  
        case "RESET_PAGE" :
            return {
                ...state,
                page: 1
            } 
        case "NOW_PLAYİNG_MOVİES"  :
            return {
                ...state,
                activePage: "NOW PLAYİNG MOVİES",
                page: 1,
                mainURL: `https://api.themoviedb.org/3/movie/now_playing?api_key=ad9a7b0c1f07914b7f151c86d435af36&language=en-US&page=`
            }
        case "POPULAR_MOVIES"  :
            return {
                ...state,
                activePage: "POPULAR MOVIES",
                page: 1,
                mainURL: `https://api.themoviedb.org/3/movie/popular?api_key=ad9a7b0c1f07914b7f151c86d435af36&language=en-US&page=`
            }  
        case "TOP_RATED_MOVİES"  :
            return {
                ...state,
                activePage: "TOP RATED MOVİES",
                page: 1,
                mainURL: `https://api.themoviedb.org/3/movie/top_rated?api_key=ad9a7b0c1f07914b7f151c86d435af36&language=en-US&page=`
            }  
        case "UP_COMİNG_MOVİES"  :
            return {
                ...state,
                activePage: "UP COMİNG MOVİES",
                page: 1,
                mainURL: `https://api.themoviedb.org/3/movie/upcoming?api_key=ad9a7b0c1f07914b7f151c86d435af36&language=en-US&page=`
            }           
        case "SEARCH_MOVİE" :
            return {
                ...state,
                search: action.search
            }   
        case "LOADİNG" :
            return {
                ...state,
                isLoading: state.isLoading
            }  
        default: 
        return state              
    }

}
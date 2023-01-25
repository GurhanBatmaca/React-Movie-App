export const ReduserFn = (state, action) => {

    switch(action.type) {
        case "ADD_MOVİE" :
            return {...state , movies: action.movies }
        case "change" :
            return {
                ...state,
                name: action.name
            }    
    }

}
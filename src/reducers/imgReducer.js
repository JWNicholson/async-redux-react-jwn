import { FETCH_IMG, FETCH_SUCCESS, FETCH_FAIL } from '../actions/imgActions';

//initial state
const initialState = {
    data:[],
    isFetchingData: false,
    error: ""
};


 const imgReducer = (state=initialState, action) => {
    //Reducer switch here
    switch(action.type){
        //start fetching image data
        case FETCH_IMG:
            return {
                ...state,
                isFetchingData: true,
                error: ""
            };
        
        //fetch successful
        case FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isFetchingData: false,
                error: ""
            };
    
        //fetch failed
        case FETCH_FAIL:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
    //default return
    default: 
        return state;
    }
};

export default imgReducer;
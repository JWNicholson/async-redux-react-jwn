import axios from 'axios';

export const FETCH_IMG = "FETCH_IMG";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getImages = () => dispatch => {
    dispatch({type: FETCH_IMG});
    axios
        .get("https://dog.ceo/api/breeds/image/random/50")
            .then(res => {
                console.log(res);
                dispatch({
                    type: FETCH_SUCCESS, 
                    payload: res.data.message
                });
            })
             .catch(err => {
                 console.log("Bad dog didn't fetch ", err);
                 dispatch({
                     type: FETCH_FAIL,
                     payload: "Error fetching data from api"
                 });
             });

};
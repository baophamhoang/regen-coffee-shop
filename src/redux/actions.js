import { DISHES } from "../shared/dishes";
import { 
    ADD_COMMENT,
    ADD_COMMENTS,
    COMMENTS_FAILED,
    ADD_DISHES,
    DISHES_LOADING,
    DISHES_FAILED,
    ADD_PROMOS,
    PROMOS_FAILED,
    PROMOS_LOADING,
    ADD_FEEDBACKS
 } from "./actionTypes";
import { baseUrl } from "../shared/baseUrl";

export const addComment = (payload) => {
    return ({
        type: ADD_COMMENT,
        payload
    })
}
export const addComments = (payload) => {
    return ({
        type: ADD_COMMENTS,
        payload
    })
}
export const addDishes = (payload) => {
    return ({
        type: ADD_DISHES,
        payload
    })
}
export const dishesLoading = () => {
    return ({
        type: DISHES_LOADING
    })
}
export const dishesFailed = (payload) => {
    return ({
        type: DISHES_FAILED,
        payload
    })
}
export const addFeedbacks = (payload) => {
    return ({
        type: ADD_FEEDBACKS,
        payload
    })
}
// export const fetchDishes = () => (dispatch) => {
//     dispatch(dishesLoading(true))
//     setTimeout(()=>{
//         dispatch(addDishes(DISHES))
//     },2000)
// }
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading());
    return fetch(baseUrl + 'dishes')
    .then(response => {
        if (response.ok){
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errorMsg = new Error(error.message)
        throw errorMsg;
    }
    )
    .then (response => response.json())
    .then (dishes => dispatch(addDishes(dishes)))
    .catch (error => dispatch(dishesFailed(error.message)))
}
export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
        error => {
              var errmess = new Error(error.message);
              throw errmess;
        })
      .then(response => response.json())
      .then(comments => dispatch(addComments(comments)))
      .catch(error => dispatch(commentsFailed(error.message)))
};
export const commentsFailed = (errmess) => ({
    type: COMMENTS_FAILED,
    payload: errmess
});


export const fetchPromos = () => (dispatch) => {
    console.log('promotion');
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ADD_PROMOS,
    payload: promos
});
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
    ADD_FEEDBACKS,
    ADD_LEADERS,
    LEADERS_FAILED,
    LEADERS_LOADING
 } from "./actionTypes";
import { baseUrl } from "../shared/baseUrl";
import { update, push, child, get } from "firebase/database";
import getDb from "../firebase/getDb";

// Comment Actions
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
export const commentsFailed = (errmess) => ({
    type: COMMENTS_FAILED,
    payload: errmess
});
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
export const fetchCommentsFB = () => (dispatch) => {    
    return get(child(getDb(), 'comments'))
    .then(response => {
        if (response.exists()) {
            return response;
          } else {
            // var error = new Error('Error ' + response.status + ': ' + response.statusText);
            // error.response = response;
            var error = new Error(error.message);
            throw error;
          }
        },
        error => {
              var errmess = new Error(error.message);
              throw errmess;
        })
      .then(response => response.val())
      .then(comments => dispatch(addComments(comments)))
      .catch(error => dispatch(commentsFailed(error.message)))
};
export const postComment = (payload) => (dispatch) => {
    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        },credentials: "same-origin"
    })
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
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error =>  { 
        console.log('post comments ', error.message); 
        alert('Your comment could not be posted\nError: '+error.message); 
    });
}
export const postCommentFB = (payload) => (dispatch) => {
    const updates ={};
    updates['/comments/'+payload.id] = payload;
    console.log(updates);
    return update(getDb(), updates)
    // .then(response => console.log(response));
    // .then(response => {
    //     if (response) {
    //       return response;
    //     } else {
    //     //   var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //     //   error.response = response;
    //         var error = new Error(error.message)
    //         throw error;
    //     }
    //   },
    //   error => {
    //         throw error;
    //   })
    // .then(response => response.json())
    .then(() => dispatch(addComment(payload)))
    .catch(error =>  { 
        console.log('post comments ', error.message); 
        alert('Your comment could not be posted\nError: '+error.message); 
    });
}

// Dishes actions
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
export const fetchDishesFB = () => (dispatch) => {    
    return get(child(getDb(), 'dishes'))
    .then(response => {
        if (response.exists()) {
            return response;
          } else {
            // var error = new Error('Error ' + response.status + ': ' + response.statusText);
            // error.response = response;
            var error = new Error(error.message)
            throw error;
          }
        },
        error => {
              var errmess = new Error(error.message);
              throw errmess;
        })
      .then(response => response.val())
      .then(dishes => dispatch(addDishes(dishes)))
      .catch(error => dispatch(commentsFailed(error.message)))
};
export const fetchPromos = () => (dispatch) => {
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
export const fetchPromosFB = () => (dispatch) => {    
    return get(child(getDb(), 'promotions'))
    .then(response => {
        if (response.exists()) {
            return response;
          } else {
            // var error = new Error('Error ' + response.status + ': ' + response.statusText);
            // error.response = response;
            var error = new Error(error.message)
            throw error;
          }
        },
        error => {
              var errmess = new Error(error.message);
              throw errmess;
        })
      .then(response => response.val())
      .then(promos => dispatch(addPromos(promos)))
      .catch(error => dispatch(commentsFailed(error.message)))
};
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
// Feedback Actions
export const addFeedbacks = (payload) => {
    return ({
        type: ADD_FEEDBACKS,
        payload
    })
}
export const postFeedbacks = (payload) => (dispatch) => {
    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then( response => {
        if (response.ok){
            return response
        }
        else {
            var error = new Error('Error ' + response.status + ': '+ response.statusText);
            error.response = response;
            throw error
        }
    },
    error => {
        throw error;
    })
    .then (response => response.json())
    .then (response => alert('feedback posted '+ JSON.stringify(response)))
    .catch (error => {
        console.log('post feedbacks', error.message); 
        alert('Your feedbacks could not be posted\nError: '+error.message); 
    }) 
}
export const postFeedbacksFB = (payload) => (dispatch) => {
    const updates ={};
    updates['/feedback/'+payload.id] = payload;
    console.log(updates);
    return update(getDb(), updates)
    .then(() => dispatch(addFeedbacks(payload)))
    .catch(error =>  { 
        console.log('post comments ', error.message); 
        alert('Your comment could not be posted\nError: '+error.message); 
    });
}
// Leaders Actions
export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading);
    return fetch(baseUrl + 'leaders')
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error '+ response.status + ": " + response.statusText);
                error.response = response;
                throw error
            }
        },
        error => {
            var errorMsg = new Error(error.message);
            console.log(error);
            throw errorMsg
        })
        .then(response => response.json())
        .then(response => dispatch(addLeaders(response)))
        .catch(errorMsg => dispatch(leadersFailed(errorMsg.message)))
}
export const fetchLeadersFB = () => (dispatch) => {    
    return get(child(getDb(), 'leaders'))
    .then(response => {
        if (response.exists()) {
            return response;
          } else {
            // var error = new Error('Error ' + response.status + ': ' + response.statusText);
            // error.response = response;
            var error = new Error(error.message)
            throw error;
          }
        },
        error => {
              var errmess = new Error(error.message);
              throw errmess;
        })
      .then(response => response.val())
      .then(leaders => dispatch(addLeaders(leaders)))
      .catch(error => dispatch(commentsFailed(error.message)))
};
export const addLeaders = (payload) => {
    return {
        type: ADD_LEADERS,
        payload
    }
}
export const leadersLoading = () => {
    return {
        type: LEADERS_LOADING
    }
}
export const leadersFailed = (payload) => {
    return {
        type: LEADERS_FAILED,
        payload
    }
}

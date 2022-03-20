import {
    PROMOS_FAILED,
    PROMOS_LOADING,
    ADD_PROMOS
} from './actionTypes'  

const promotionsReducer = (state = {
                                isLoading: true,
                                errorMsg: null,
                                promotions:[]
                            }, action) => {
    switch(action.type){
        case ADD_PROMOS:
            return ({
                ...state,
                isLoading: false,
                errorMsg: null,
                promotions: action.payload
            })
        case PROMOS_LOADING:
            return ({
                ...state,
                isLoading: true,
                errorMsg: null,
                // promotions: []
            })
        case PROMOS_FAILED:
            return ({
                ...state,
                isLoading: false,
                errorMsg: action.payload
            })
        default: 
            return state;
    }
}

export default promotionsReducer;
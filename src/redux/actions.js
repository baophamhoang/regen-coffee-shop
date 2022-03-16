import { ADD_COMMENT } from "./actionTypes";

export const addComment = (payload) => {
    return ({
        type: ADD_COMMENT,
        payload
    })
}
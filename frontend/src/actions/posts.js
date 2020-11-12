import * as api from '../api'

// Action creators
export const getPosts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchPost()
        const action = { type:"FETCH_ALL", payload: data }
        dispatch(action)        
    } catch (error) {
        console.log(error.message)
    }
}
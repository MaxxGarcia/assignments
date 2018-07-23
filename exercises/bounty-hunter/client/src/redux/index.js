import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

export const newBounty = bounty => {
    return dispatch => {
        axios.post(`/bounties`, bounty)
            .then(response => {
                console.log(response.data)
                dispatch({
                    type: "NEW_BOUNTY",
                    bounty: response.data
                })
            })
        .catch(err => { console.log(err) })
    }
}
export const delBounty = bountyId => {
    return dispatch => {
        axios.delete(`/bounties/${bountyId}`)
            .then(response => {
                dispatch({
                    type: "DEL_BOUNTY",
                    bountyId
                })
            })
        .catch(err => { console.log(err) })
    }
}


const reducer = (prevState = { bounties: [] }, action) => {
    switch (action.type) {
        case "NEW_BOUNTY":
            return {
                bounties: [...prevState.bounties, action.bounty]
            }
        case "DEL_BOUNTY":
            return {
                bounties: prevState.bounties.filter((item, i) => {
                    return item._id !== action.bountyId
                })
            }
        default:
            return prevState
    }
}

export default createStore(reducer, applyMiddleware(thunk))
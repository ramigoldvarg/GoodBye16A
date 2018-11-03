import { NEXT_ID, PREV_ID } from '../actions/index.js'

export default function(state = 0, action) {
    switch(action.type) {
        case (PREV_ID):
            if (action.payload < 0) {
                return 0;
            }
        case (NEXT_ID):
            return action.payload
        default:
            return state
    }
}
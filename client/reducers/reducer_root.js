import { combineReducers } from 'redux';
import ReducerCurrentGif from './reducer_current_gif';
import ReducerGifs from './reducer_gifs';

const rootReducer = combineReducers({
    currentGif: ReducerCurrentGif,
    gifs: ReducerGifs,
});

export default rootReducer;
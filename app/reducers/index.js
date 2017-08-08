import { combineReducers } from 'redux';

// Reducers
import userReducer from './user-reducer';
import videoReducer from './video-reducer';
import searchLayoutReducer from './search-layout-reducer';

// Combine Reducers
var reducers = combineReducers({
    userState: userReducer,
    videoState: videoReducer,
    searchLayoutState: searchLayoutReducer
});

export default reducers;

import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { leaderboardReducer } from './leaderboard';
import { homeReducer } from './home';


export default combineReducers({
  auth: authReducer,
  home: homeReducer,
  routing: routerReducer,
  leaderboard: leaderboardReducer
});

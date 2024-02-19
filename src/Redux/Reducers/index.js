import {combineReducers} from 'redux';
import appReducer from './appReducer';
import versesReducer from './versesReducer';
import favReducer from './favReducer';

export default combineReducers({
  app: appReducer,
  verses: versesReducer,
  fav: favReducer,
});

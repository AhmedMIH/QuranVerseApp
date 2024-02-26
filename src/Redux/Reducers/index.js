import {combineReducers} from 'redux';
import appReducer from './appReducer';
import versesReducer from './versesReducer';
import favReducer from './favReducer';
import tagsReducer from './tagsReducer';

export default combineReducers({
  app: appReducer,
  verses: versesReducer,
  fav: favReducer,
  tags: tagsReducer,
});

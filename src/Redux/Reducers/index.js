import {combineReducers} from 'redux';
import appReducer from './appReducer';
import versesReducer from './versesReducer';
import favReducer from './favReducer';
import tagsReducer from './tagsReducer';
import { commonReducer } from './commonReducer';

export default combineReducers({
  app: appReducer,
  verses: versesReducer,
  fav: favReducer,
  tags: tagsReducer,
  common: commonReducer,
});

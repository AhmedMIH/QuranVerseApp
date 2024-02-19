import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {thunk} from 'redux-thunk';
import reducer from './Reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'reducer',
  storage: AsyncStorage,
  whitelist: ['app', 'fav'], // or blacklist to exclude specific reducers
};
const presistedReducer = persistReducer(persistConfig, reducer);
const middleware = applyMiddleware(thunk);
const store = createStore(presistedReducer, middleware);
const persistor = persistStore(store);
export {persistor, store};

import { persistStore, persistReducer } from 'redux-persist';
import {
  createStore, compose,
} from 'redux';
import localStorage from 'redux-persist/lib/storage';
import rootReducer from './redux/reducer';

const persistConfig = {
  key: 'root',
  storage: localStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState = {}) {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    persistedReducer,
    initialState,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
  );
  const persistor = persistStore(store);
  return { store, persistor };
}

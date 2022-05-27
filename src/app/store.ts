import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'

import { authReducer } from './features'

const rootReducer = combineReducers({
  auth: authReducer.auth
})

const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

export default store

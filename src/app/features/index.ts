import authSlice, { reset as resetAuth, rehydrate as rehydrateAuth, login, me } from "./auth/authSlice";

export {
  authSlice as authReducer,
  resetAuth,
  rehydrateAuth,
  login as loginAuth,
  me as meAuth
}
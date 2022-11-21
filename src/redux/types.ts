import { store } from "./configureStore";

export interface AuthState {
  logInDetails: LogInDetails;
  loggedIn: boolean;
}

export interface  LogInDetails {
  username: string | null;
  password: string | null
}
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

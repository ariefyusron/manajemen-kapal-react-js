// actions
interface Payload {
  data?: any;
}

interface Params {
  type: string;
  payload?: Payload;
}

export type Dispatch = (params: Params | Function) => void;
export type GetState = () => Reducers;

export interface Action {
  type: string;
  payload: Payload;
}

// combine reducers
export interface Reducers {
  auth: AuthState;
}

// reducers
export interface AuthState {
  login: {
    isLoading: boolean;
    error: string;
  };
  register: {
    isLoading: boolean;
    error: string;
  };
}

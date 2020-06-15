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
  kapal: KapalState;
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

export interface KapalState {
  kapal: {
    isLoading: boolean;
    list: any[];
  };
  detailKapal: {
    isLoading: boolean;
    data: any;
  };
  addKapal: {
    isLoading: boolean;
  };
  deleteKapal: {
    isLoading: boolean;
  };
  typeKapal: {
    isLoading: boolean;
    list: any[];
  };
  typeSurvey: {
    isLoading: boolean;
    list: any[];
  };
}

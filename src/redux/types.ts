// actions
interface Payload {
  data?: any;
  id?: string | number;
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
  rabReparasi: RabReparasiState;
  standarTarif: StandarTarifState;
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
  user: {
    isLoading: boolean;
    list: any[];
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
  patchKapal: {
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

export interface RabReparasiState {
  pengedokan: {
    isLoading: boolean;
    list: any[];
  };
  pelayananUmum: {
    isLoading: boolean;
    list: any[];
  };
  kontruksiBadanKapal: {
    isLoading: boolean;
    list: any[];
  };
}

export interface StandarTarifState {
  isLoading: boolean;
  list: any[];
  listPekerjaan: any[];
}

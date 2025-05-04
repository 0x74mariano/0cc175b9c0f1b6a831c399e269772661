export interface IForms {
  constructor: IConstructor;
}

export interface IConstructor {
  paginas: IPagina[];
}

export interface IPagina {
  componentes: IComponente[];
  style: IEstiloGlobal;
}

export interface IEstiloGlobal {
  tablet?: {
    [key: string]: string;
  },
  desktop: {
    [key: string]: string;
  },
  mobile:{
    [key: string]: string;
  }
}
export interface IComponente {
  app: {
    id: string;
    contrato: any;
    nomeComponente: string;
    style: IEstiloGlobal;
  };
  tag?: string;
  textoExibicao?: string;
  url?: string;
}
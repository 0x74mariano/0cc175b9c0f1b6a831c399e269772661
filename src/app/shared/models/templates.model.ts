import { IEstiloGlobal } from "./forms.model";

export interface ITemplate {
  nome: string;
  layout: ILayout;
  selecionado?: boolean;
  estiloGlobal: IEstiloGlobal;
  estiloDoComponente: IEstiloDoComponente[];
}

export interface ILayout {
  elementos: IElemento[];
  style: IEstilo;
}

export interface IElemento {
  style: IEstilo;
}

export interface IEstilo {
  [key: string]: string;
}

export interface IEstiloDoComponente {
  [key: string]: { [key: string]: string };
}
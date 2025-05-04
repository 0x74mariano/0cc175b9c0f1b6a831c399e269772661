export interface Error {
  title: string;
  description: string;
  detail: FailDetail[];
}
export interface FailDetail {
  message: string;
  typeError: TypeErrors;
}

export class TypeErrors {
  public static readonly INVALID_REGISTER = 'Cadastro de parâmetro inválido';
}

export class MessageErrors {
  public static readonly MENSAGEM_SEGMENTO = "É obrigatório o envio do contexto de 'segmento' para funcionar esse WebComponent";
  public static readonly MENSAGEM_TITULO = "É obrigatório o envio do inputdata  'mensagem.titulo' para funcionar esse WebComponent";
}

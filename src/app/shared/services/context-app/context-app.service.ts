// import { FailDetail, TypeErrors, MessageErrors } from '../../models/error.model';
// import { IContext } from '@quickweb/mfe-core';
// import { Injectable } from '@angular/core';
// import { InputData } from '../../models/inputdata.model';

// /**
//  * Service para manipulação do contexto
//  *
//  * OBS: Todas a services não podem ter  providedIn: 'root', pois o root adiciona no pai,
//  * E isso fará que sua service jamais seja destruída de maneira completa.
//  * Para saber mais acesse o link abaixo
//  * https://iconectados.sharepoint.com/:v:/r/sites/Plataforma360i/Documentos%20Compartilhados/Stream%20Migrated%20Videos/Plataforma%20360i/WebComponent/WebComponent%20-%20Servi%C3%A7os%20Desacoplados.webm?csf=1&web=1&e=5YDHhI&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZyIsInJlZmVycmFsQXBwUGxhdGZvcm0iOiJXZWIiLCJyZWZlcnJhbE1vZGUiOiJ2aWV3In19
//  *
//  * @export
//  * @class ContextAppService
//  */
// @Injectable()
// export class ContextAppService {

//   /**
//    * Variável para armazenar o contexto
//    *
//    * @private
//    * @type {IContext}
//    * @memberof ContextAppService
//    */
//   private context: IContext;

//   /**
//    * Método para obter o contexto completo
//    *
//    * @returns {IContext}
//    * @memberof ContextAppService
//    */
//   public obtain = (): IContext => this.context;

//   /**
//    * Método para obter o inputdata dentro do contexto
//    *
//    * @readonly
//    * @type {InputData}
//    * @memberof ContextAppService
//    */
//   public get inputData(): InputData {
//     return this.context.inputdata;
//   }

//   /**
//    * Método para inserir um novo contexto
//    *
//    * @param {IContext} context
//    * @memberof ContextAppService
//    */
//   public insert(context: IContext): void {
//     this.context = context;
//   }

//   /**
//    * Método para listar as falhas do contexto recebido
//    *
//    * @param {IContext<InputData>} context
//    * @return {*}  {FailDetail[]}
//    * @memberof ContextAppService
//    */
//   public listFails(context: IContext<InputData>): FailDetail[] {
//     const details: FailDetail[] = [];

//     if (!context.segmento) // Obrigatório receber o segmento desejado para aplicação aplicar as cores correta
//       details.push({
//         typeError: TypeErrors.INVALID_REGISTER,
//         message: MessageErrors.MENSAGEM_SEGMENTO
//       });


//     // Exemplo de uma validação de inputdata que é necessário ser informado para renderizar o WebComponent
//     if (!context.inputdata?.mensagem?.titulo)
//       details.push({
//         typeError: TypeErrors.INVALID_REGISTER,
//         message: MessageErrors.MENSAGEM_TITULO
//       });

//     return details;
//   }
// }

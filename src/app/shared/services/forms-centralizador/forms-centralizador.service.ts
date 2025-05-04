// import { Injectable, Input } from '@angular/core';
// import { Observable, Subject, BehaviorSubject } from 'rxjs';
// import { map, take } from 'rxjs/operators';
// import { MicrofrontendsApiService } from '../api/microfrontends-api/microfrontends-api.service';
// import {
//   IForms,
//   IComponente,
//   IEstiloGlobal,
//   IPagina
// } from '../../models/forms.model';
// import { IMicrofrontend } from '../../models/microfrontend.model';
// import { ITemplate, IEstiloDoComponente } from '../../models/templates.model';

// export type tipoDispositivo = 'desktop' | 'tablet' | 'mobile';

// /**
//  * Serviço centralizador do formulário dinâmico.
//  * Responsável por gerenciar os estados e as interações do formulário dinâmico entre seus componentes.
//  */
// @Injectable({
//   providedIn: 'root',
// })
// export class FormsCentralizadorService {
//   @Input() microfrontendIdentificado: IMicrofrontend;

//   private templatesSubject = new BehaviorSubject<ITemplate[]>([]);
//   templates$ = this.templatesSubject.asObservable();

//   private dispositivoSelecionado = new BehaviorSubject<tipoDispositivo>('desktop');
//   dispositivoSelecionado$ = this.dispositivoSelecionado.asObservable();  
  
//   public formsSubject = new BehaviorSubject<IForms | null>(null);
//   forms$ = this.formsSubject.asObservable();
  
//   private microfrontendSelecionadoSubject = new Subject<IMicrofrontend>();
//   microfrontendSelecionado$ = this.microfrontendSelecionadoSubject.asObservable();

//   private templateSelecionadoSubject = new BehaviorSubject<ITemplate | null>(null);
//   templateSelecionado$ = this.templateSelecionadoSubject.asObservable();
  
//   public dadosTemplates: IEstiloDoComponente[] = [];

//   public formsSelecionado: any;

//   constructor(
//     private MicrofrontendsApiService: MicrofrontendsApiService // Serviço de API para busca dos microfrontends
//   ) {}

// // Seleciona o dispositivo atual, considerando os 3 types acima
//   selecionarDispositivo(dispositivo: tipoDispositivo) {
//     this.dispositivoSelecionado.next(dispositivo);
//   }

// // Obtém o dispositivo selecionado através de um Observable do tipo de dispositivo selecionado.
//   obterDispositivoSelecionado(): Observable<tipoDispositivo> {
//     return this.dispositivoSelecionado.asObservable();
//   }

//   // Define o forms atual.
//   setforms(forms: IForms): void {
//     this.formsSubject.next(forms);
//   }

//   formsPagina() : IPagina | undefined {
//     return this.formsSubject.value?.constructor.paginas[0];
//   }

//   // Obtém o forms atual através de um observable do forms atual.
//   getforms(): Observable<IForms | null> {
//     // console.log(this.forms$)
//     return this.forms$;
//   }

//   // define os templates atuais
//   setTemplates(templates: ITemplate[]) {
//     this.templatesSubject.next(templates);
//   }

//   // Obtém os templates atuais através de um Observable com a lista de templates atuais.
//   getTemplates(): Observable<ITemplate[]> {
//     return this.templates$;
//   }

//   setTemplateSelecionado(templateSelecionado: ITemplate): void {
//     this.templateSelecionadoSubject.next(templateSelecionado);
//     this.atualizarContratoFormsComTemplateSelecionado(templateSelecionado);
//     this.atualizarContratoComEstiloComponentes(templateSelecionado);
//   }

//   getTemplateSelecionado(): Observable<ITemplate | null> {
//     return this.templateSelecionado$
//   }

// // Obtém os componentes do forms aravés de um Observable com a lista de componentes.
//   obterComponentes(): Observable<IComponente[]> {
//     return this.forms$.pipe(
//       map(formsAtual => {
//         let componentes: IComponente[] = [];
//         if (formsAtual && formsAtual.constructor && formsAtual.constructor.paginas) {
//           formsAtual.constructor.paginas.forEach(pagina => {
//             if (pagina.componentes) {
//               componentes = componentes.concat(pagina.componentes);
//             }
//           });
//         }
//         return componentes;
//       })
//     );
//   }

// // Obtém os estilos globais vindos do forms aravés de um Observable com a lista de estilos.
//   obterEstilosGlobais(): Observable<IEstiloGlobal> {
//     return this.forms$.pipe(
//       map(formsAtual => {
//         let estilos: IEstiloGlobal = { desktop: {}, mobile: {} };
//         if (formsAtual && formsAtual.constructor && formsAtual.constructor.paginas) {
//           formsAtual.constructor.paginas.forEach(pagina => {
//             if (pagina.style) {
//               estilos = { ...estilos, ...pagina.style };
//             }
//           });
//         }
//         return estilos;
//       })
//     );
//   }

// // Atualiza o contrato com o estilo global que está no template selecionado
//   atualizarContratoFormsComTemplateSelecionado(templateSelecionado: ITemplate): void {
//     if (templateSelecionado && templateSelecionado.estiloGlobal) {
//       this.forms$.pipe(
//         take(1),
//         map(formsAtual => {
//           if (formsAtual && formsAtual.constructor.paginas) {
//             formsAtual.constructor.paginas.forEach(pagina => {
//               if (pagina.style) {
//                 pagina.style = { ...pagina.style, ...templateSelecionado.estiloGlobal };
//               } else {
//                 pagina.style = { ...templateSelecionado.estiloGlobal };
//               }
//             });
//           }
//           return formsAtual;
//         })
//       ).subscribe(formsAtualizado => {
//         this.formsSubject.next(formsAtualizado);
//       });
//     }
//   }

// /**
//  * Este método atualiza o contrato do formulário dinâmico com o estilo dos componentes baseado no template selecionado. * 
//  * Ele percorre as páginas e componentes do forms e substitui o estilo de cada componente
//  * com um objeto de estilo do template selecionado (IEstiloDoComponente). Cada componente recebe um objeto de estilo diferente,
//  * distribuído de forma cíclica entre os objetos de estilo disponíveis no template selecionado.
//  */
// atualizarContratoComEstiloComponentes(templateSelecionado: any): void {
//   if (templateSelecionado && templateSelecionado.estiloDoComponente) {
//     this.forms$.pipe(
//       take(1),
//       map(formsAtual => {
//         if (formsAtual && formsAtual.constructor.paginas) {
//           formsAtual.constructor.paginas = formsAtual.constructor.paginas.map(pagina => {
//             if (pagina.componentes) {
//               const quantidadeEstilos = templateSelecionado.estiloDoComponente.length;
//               const quantidadeComponentes = pagina.componentes.length;

//               // Ajusta a quantidade de componentes conforme o número de estilos disponíveis
//               if (quantidadeComponentes < quantidadeEstilos) {
//                 for (let i = quantidadeComponentes; i < quantidadeEstilos; i++) {
//                   pagina.componentes.push({
//                     app: {
//                       style: {},
//                       id: '',
//                       nomeComponente: 'selecione um novo mfe', //Quando tem mais componentes do que mfe, ele pedirá pra selecionar um novo mfe
//                       contrato: {
//                         inputData: ''
//                       }
//                     }
//                   } as IComponente);
//                 }
//               }

//               pagina.componentes = pagina.componentes.slice(0, quantidadeEstilos).map((componente: IComponente, index: number) => {
//                 // Substitui componente.app.style com um objeto de templateSelecionado.estiloDoComponente
//                 const estiloIndex = index % quantidadeEstilos;
//                 componente.app.style = { ...templateSelecionado.estiloDoComponente[estiloIndex] };
//                 return componente;
//               });
//             }
//             return pagina;
//           });
//         }
//         return formsAtual;
//       })
//     ).subscribe(formsAtualizado => {
//       // console.log(formsAtualizado);
//       this.formsSubject.next(formsAtualizado);
//     });
//   }
// }

// // Obtém a lista de microfrontends, retornando um Observable com a lista de mfes.
//   obterMicrofrontends(): Observable<IMicrofrontend[]> {
//     return this.MicrofrontendsApiService.listMicrofrontends().pipe(
//       map((response: IMicrofrontend[]) => {
//         // console.log('Microfrontends response:', response);
//         return response;
//       })
//     );
//   };

//   public atualizarMicrofrontend(dadosMfe: any, componente: any): void {
//     const formsPagina = this.formsPagina() as any;
//     console.log('formsPagina.componentes:', formsPagina.componentes);
//     console.log('componente:', componente); 
//     const indexPagina: number = formsPagina.componentes.indexOf(componente);
//     const componenteAtual = formsPagina.componentes[indexPagina];
//     console.log('indexPagina:', indexPagina);

//     if (componenteAtual.app.contrato.inputDataMfe) {
//       componenteAtual.app.contrato.inputDataMfe.inputData = { ...dadosMfe };
//       componenteAtual.app.contrato.webcomponent.contrato.inputDataMfe.identificadorWebComponent = dadosMfe.name;
//     }
  
//     if (componenteAtual.app.contrato.inputdata) {
//       componenteAtual.app.contrato.inputdata = { ...dadosMfe };
//       componenteAtual.app.nomeComponente = 'WRAPPER_WEB_COMPONENT';
//     }
  
//     componenteAtual.app.contrato = { ...dadosMfe };
//     componenteAtual.app.nomeComponente = 'WRAPPER_WEB_COMPONENT';

//     const currentforms = this.formsSubject.value;
//     this.formsSubject.next(currentforms);
//   };

//   private substituirInputData(obj: any, formJson: any): boolean {
//     let foundInputData = false;

//     // Primeira passagem para procurar 'inputdata'
//     for (const key in obj) {
//         if (Object.prototype.hasOwnProperty.call(obj, key)) {
//             if (key === 'inputdata') {
//                 // console.log(`Substituindo ${key} com`, formJson);
//                 obj[key] = formJson;
//                 return true; 
//             } else if (typeof obj[key] === 'object' && obj[key] !== null) {
//                 foundInputData = this.substituirInputData(obj[key], formJson);
//                 if (foundInputData) {
//                     return true; 
//                 }
//             }
//         }
//     };

//     // Segunda passagem para procurar 'app.contrato' se 'inputdata' não foi encontrado
//     if (!foundInputData) {
//         for (const key in obj) {
//             if (Object.prototype.hasOwnProperty.call(obj, key)) {
//                 if (key === 'app' && typeof obj[key] === 'object' && obj[key] !== null) {
//                     if (Object.prototype.hasOwnProperty.call(obj[key], 'contrato')) {
//                         // console.log(`Substituindo contrato com`, formJson);
//                         obj[key]['contrato'] = formJson;
//                         return true; 
//                     }
//                 } else if (typeof obj[key] === 'object' && obj[key] !== null) {
//                     if (this.substituirInputData(obj[key], formJson)) {
//                         return true; 
//                     }
//                 }
//             }
//         }
//     };

//     return false;
// }

//   atualizarforms(formJson: any, idComponente: string): void {
//     const currentforms = this.formsSubject.getValue();
//     if (currentforms && currentforms.constructor && currentforms.constructor.paginas) {
//       // console.log('Current forms:', currentforms);
  
//       const updatedPaginas = currentforms.constructor.paginas.map(pagina => {
//         const updatedComponentes = pagina.componentes.map(componente => {
//           if (componente.app.id === idComponente) {
//             // console.log('Updating componente:', componente);
//             this.substituirInputData(componente, formJson);
//           }
//           return componente;
//         });
//         return {
//           ...pagina,
//           componentes: updatedComponentes
//         };
//       });
  
//       const updatedforms = {
//         ...currentforms,
//         forms: {
//           ...currentforms.constructor,
//           paginas: updatedPaginas
//         }
//       };
  
//       // console.log('Updated forms:', updatedforms);
//       this.formsSubject.next(updatedforms);
//     } else {
//       console.error('forms or forms.paginas não está definido');
//     }
//   }
// }

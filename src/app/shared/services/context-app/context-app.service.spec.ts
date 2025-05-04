// /* eslint-disable @typescript-eslint/quotes */
// import { CONTEXT_INVALID, CONTEXT_VALID } from './test/mock';
// import { ContextAppService } from './context-app.service';
// import { FailDetail, TypeErrors, MessageErrors } from '../../models/error.model';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { TestBed } from '@angular/core/testing';

// describe('ContextAppService', () => {
//   let service: ContextAppService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//     imports: [RouterTestingModule, HttpClientTestingModule],
//     schemas: [],
//     providers: [ContextAppService]
// }).compileComponents();

//     service = TestBed.inject(ContextAppService);
//   });

//   it('Quando for enviado um contexto inválido, Então todas as falhas devem ser enviada ao serviço de modal #listFails', () => {
//     const result = service.listFails(CONTEXT_INVALID);
//     const expectedFails: FailDetail[] = [
//       {
//         typeError: TypeErrors.INVALID_REGISTER,
//         message: MessageErrors.MENSAGEM_TITULO
//       },
//     ];
//     expect(result).toEqual(expectedFails);
//   });

//   it('Quando for enviado um contexto válido, Então não deve retornar falha #listFails', () => {
//     const result = service.listFails(CONTEXT_VALID);
//     expect(result).toEqual([]);
//   });

//   it('Quando for inserido o novo contexto e acionado o metodo de obter, Então o result obtido precisa o mesmo enviado r e atender, Então não deve retornar falha #listFails', () => {
//     service.insert(CONTEXT_VALID);
//     const result = service.obtain();
//     expect(result).toEqual(CONTEXT_VALID);
//     expect(result.inputdata).toEqual(service.inputData);
//   });

//   it('Quando for enviado um segmento inválido, Então todas as falhas devem ser enviada ao serviço de modal #listFails', () => {
//     const CONTEXT_INVALID_SEGMENT = CONTEXT_INVALID;
//     CONTEXT_INVALID_SEGMENT.segmento = undefined;

//     const result = service.listFails(CONTEXT_INVALID_SEGMENT);
//     const expectedFails: FailDetail[] = [
//       {
//         typeError: TypeErrors.INVALID_REGISTER,
//         message: MessageErrors.MENSAGEM_SEGMENTO
//       },
//       {
//         typeError: TypeErrors.INVALID_REGISTER,
//         message: MessageErrors.MENSAGEM_TITULO
//       }
//     ];
//     expect(result).toEqual(expectedFails);
//   });
// });

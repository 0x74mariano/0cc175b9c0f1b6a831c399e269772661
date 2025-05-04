// /* eslint-disable @typescript-eslint/quotes */
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { TestBed } from '@angular/core/testing';
// import { IMfeRouterService } from './router.service';
// import { CENARIO_INSERIR_ROUTES, CENARIO_INSERIR_ROUTES_COM_DOIS_PONTOS, CENARIO_NAVEGANDO_ROTA_INEXISTENTE, CENARIO_NAVEGAR_ROTA_COM_BARRA_VALIDA, CENARIO_NAVEGAR_ROTA_SEM_BARRA_VALIDA } from './test/mock';

// describe('IMfeRouterService', () => {
//   let service: IMfeRouterService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//     imports: [RouterTestingModule, HttpClientTestingModule],
//     schemas: [],
//     providers: [IMfeRouterService]
// }).compileComponents();

//     service = TestBed.inject(IMfeRouterService);
//   });

//   it('Quando acionado o método de navegação, Dado um rota válida com barra para navegar, Então deve remover a barra e emitir o evento para a rota desejada #navigateTo()', () => {
   
//     const spyRota = service.routeChange$.subscribe((rota) => {
//       expect(rota).toEqual(CENARIO_NAVEGAR_ROTA_COM_BARRA_VALIDA.ROTA_ESPERADA);
//     })
//     service.navigateTo(CENARIO_NAVEGAR_ROTA_COM_BARRA_VALIDA.ROTA);
    
//     expect(spyRota).not.toBeNull();
//   });

//   it('Quando acionado o método de navegação, Dado um rota válida sem barra para navegar, Então deve emitir o evento para a rota desejada #navigateTo()', () => {
   
//     const spyRota = service.routeChange$.subscribe((rota) => {
//       expect(rota).toEqual(CENARIO_NAVEGAR_ROTA_SEM_BARRA_VALIDA.ROTA_ESPERADA);
//     })
//     service.navigateTo(CENARIO_NAVEGAR_ROTA_SEM_BARRA_VALIDA.ROTA);
    
//     expect(spyRota).not.toBeNull();
//   });

//   it('Quando acionado o método inserido um Routers, Dado um rota padrão e enviado uma rota inexistente no cadastro, Então deve ir para a rota padrão #getCurrentRoute', () => {
   
//     service.setRoutes(CENARIO_NAVEGANDO_ROTA_INEXISTENTE.ROUTES);
    

//     expect(service.getCurrentRoute?.path).toEqual(CENARIO_NAVEGANDO_ROTA_INEXISTENTE.ROTA_ESPERADA);
//   });


//   it('Quando acionado inserido um Routers, Dado um Routers válido, Então deve ser adicionado na lista para ser consultado #setRoutes()', () => {
   
//     service.setRoutes(CENARIO_INSERIR_ROUTES.ROUTES);
//     service.navigateTo(CENARIO_INSERIR_ROUTES.ROTA_ATUAL);
//     const route = service.getCurrentRoute;
    
//     expect(route?.path).toEqual(CENARIO_INSERIR_ROUTES.ROTA_ATUAL);
//   });

//   it('Quando acionado inserido um Routers, Dado um Routers com parâmetro válido, Então deve ser adicionado na lista para ser consultado #setRoutes()', () => {
   
//     service.setRoutes(CENARIO_INSERIR_ROUTES_COM_DOIS_PONTOS.ROUTES);
//     service.navigateTo(CENARIO_INSERIR_ROUTES_COM_DOIS_PONTOS.ROTA_ATUAL);
//     const route = service.getCurrentRoute;
//     const parametros = service.getParamFromRoute;
    
//     expect(route?.path).toEqual(CENARIO_INSERIR_ROUTES_COM_DOIS_PONTOS.ROTA_ATUAL);
//     expect(parametros).toEqual(CENARIO_INSERIR_ROUTES_COM_DOIS_PONTOS.PAMETROS_ESPERADO);
//   });



  

  
// });

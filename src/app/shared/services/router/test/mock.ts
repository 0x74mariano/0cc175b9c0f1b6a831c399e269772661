// import { Component } from "@angular/core";
// import { Routes } from "@angular/router";

// @Component({
//     selector: 'mf-forms',
//     template: '<div>mock</div>'
// })
// class MockComponent { };

// @Component({
//     selector: 'mf-forms',
//     template: '<div>padrao</div>'
// })
// class PadraoMockComponent { };

// export const CENARIO_NAVEGAR_ROTA_COM_BARRA_VALIDA: { ROTA: string, ROTA_ESPERADA: string } = {
//     ROTA: "/rota-valida",
//     ROTA_ESPERADA: "rota-valida"
// };

// export const CENARIO_NAVEGAR_ROTA_SEM_BARRA_VALIDA: { ROTA: string, ROTA_ESPERADA: string } = {
//     ROTA: "rota-valida",
//     ROTA_ESPERADA: "rota-valida"
// };



// export const CENARIO_INSERIR_ROUTES: { ROUTES: Routes, ROTA_ATUAL: string } = {
//     ROUTES: [
//         {
//             component: MockComponent,
//             path: "rota-componente-mock"
//         }
//     ],
//     ROTA_ATUAL: "rota-componente-mock"
// };

// export const CENARIO_NAVEGANDO_ROTA_INEXISTENTE: { ROTA: string, ROTA_ESPERADA: string, ROUTES: Routes, ROTA_ATUAL: string } = {
//     ROTA: "rota-inexistente",
//     ROTA_ESPERADA: "**",
//     ROUTES: [
//         {
//             component: MockComponent,
//             path: "rota-componente-mock"
//         },
//         {
//             path: "**",
//             component: PadraoMockComponent
//         }
//     ],
//     ROTA_ATUAL: "rota-componente-mock"
// };

// export const CENARIO_INSERIR_ROUTES_COM_DOIS_PONTOS: { ROUTES: Routes, ROTA_ATUAL: string, PAMETROS_ESPERADO: any } = {
//     ROUTES: [
//         {
//             component: MockComponent,
//             path: "rota-componente-mock/:id"
//         }
//     ],
//     ROTA_ATUAL: "rota-componente-mock/:id",
//     PAMETROS_ESPERADO: new Map<string, string>().set("id", ":id")
// };




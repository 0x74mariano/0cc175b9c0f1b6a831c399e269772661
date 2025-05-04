import { Component } from "@angular/core";
import { Route, Routes } from "@angular/router";

@Component({
    selector: 'mf-forms',
    template: '<div>padrao</div>'
})
export class HomeComponent { };


@Component({
    selector: 'mf-forms',
    template: '<div>padrao</div>'
})
class OutraPaginaMockComponent { };

@Component({
    selector: 'mf-forms',
    template: '<div>padrao</div>'
})
export class DefaultPaginaMockComponent { };

export const CENARIO_INICIANDO_COMPONENTE_VALIDO: { ROUTES: Routes, ROUTE: Route } = {
    ROUTES: [
        {
            component: HomeComponent,
            path: ""
        }
    ],
    ROUTE: {
        path: "outra-pagina",
        component: OutraPaginaMockComponent
    }
};

export const CENARIO_INICIANDO_COMPONENTE_DEFAULT_VALIDO: { ROUTES: Routes, ROUTE: Route } = {
    ROUTES: [
        {
            component: HomeComponent,
            path: ""
        },
        {
            component: DefaultPaginaMockComponent,
            path: "**"
        }
    ],
    ROUTE: {
        path: "outra-pagina",
    }
};
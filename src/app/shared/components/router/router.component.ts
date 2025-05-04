// import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
// import { Routes } from '@angular/router';
// import { IMfeRouterService } from '../../services/router/router.service';



// @Component({
//   /* eslint-disable @angular-eslint/component-selector */
//   selector: 'mfe-router-outlet',
//   template: `<ng-template #routeContent></ng-template>`,
//   standalone: true
// })
// export class MfeRouterComponent implements AfterViewInit, OnInit {
//   /**
//    * Array de Routes utilizando a interface `Routes` do @angular/router
//    */
//   @Input()
//   routes!: Routes;

//   /**
//    * Valor de referência para as rotas
//    */
//   @ViewChild('routeContent', { read: ViewContainerRef })
//   routeContent!: ViewContainerRef;

//   /**
//    * @ignore
//    */
//   constructor(private changeDetectorRef: ChangeDetectorRef, private routerService: IMfeRouterService) {}

//   /**
//    * Buscar a rota atual do service
//    */
//   get currentRoute() {
//     return this.routerService.getCurrentRoute;
//   }

//   /**
//    * Buscar a rota padrão de redirecionamento
//    */
//   get defaultRouteRedirect() {
//     return this.routes?.find(route => route.path === '**');
//   }

//   /**
//    * Buscar o componente da rota atual
//    */
//   get routeComponent() {
//     return this.currentRoute?.redirectTo !== undefined
//       ? this.routeRedirectTo?.component
//       : this.currentRoute?.component ?? this.defaultRouteRedirect?.component;
//   }

//   /**
//    * Buscar a rota de redirecionamento
//    */
//   get routeRedirectTo() {
//     return this.routes?.find(route => route.path === this.currentRoute?.redirectTo);
//   }

//   /**
//    * @ignore
//    */
//   ngOnInit() {
//     this.routerService.setRoutes(this.routes);

//     this.routerService.routeChange$.subscribe(() => {
//       this.loadComponent();
//     });
//   }

//   /**
//    * @ignore
//    */
//   ngAfterViewInit(): void {
//     this.loadComponent();
//     this.changeDetectorRef.detectChanges();
//   }

//   /**
//    * Função para carregar o componente na aba selecionada
//    */
//   loadComponent() {
//     const route = this.currentRoute;

//     if (route && this.routeComponent) {
//       this.routeContent.clear();
//       this.routeContent.createComponent<any>(this.routeComponent);
//     }
//   }
// }
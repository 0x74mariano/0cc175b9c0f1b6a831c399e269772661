// import { Injectable } from '@angular/core';
// import { Routes } from '@angular/router';
// import { Subject } from 'rxjs';

// @Injectable()
// export class IMfeRouterService {
//   private routes!: Routes;
//   private currentRoute = '';
//   private routeChange = new Subject<string>();

//   routeChange$ = this.routeChange.asObservable();

//   /**
//    * Buscar a rota atual do service
//    */
//   get getCurrentRoute() {
//     return (
//       this.routes?.find(route => {
//         // Path Params
//         if (route.path && route.path?.indexOf(':') >= 0) {
//           let pathMatch = true;
//           const currentRouteArr = this.currentRoute?.split('/');
//           const pathArr = route.path?.split('/');

//           currentRouteArr.forEach((path, idx) => {
//             if (!pathArr[idx] || (pathArr[idx]?.indexOf(':') < 0 && path !== pathArr[idx])) {
//               pathMatch = false;
//             }
//           });

//           return pathMatch;
//         }

//         // Default routes
//         return route.path === this.currentRoute;
//       }) || this.routes?.find(route => route.path === '**')
//     );
//   }

//   /**
//    * Buscar os parâmetros da rota atual
//    */
//   get getParamFromRoute() {
//     const mapParam = new Map<string, string>();
//     const currentPathArr = this.getCurrentRoute?.path?.split('/');
//     const currentRouteArr = this.currentRoute?.split('/');

//     currentPathArr?.forEach((path, idx) => {
//       if (path?.indexOf(':') >= 0) {
//         mapParam.set(path.substring(1), currentRouteArr[idx]);
//       }
//     });

//     return mapParam;
//   }

//   /**
//    * Setar as rotas no service
//    *
//    * @param routes Array de Routes utilizando a interface `Routes` do @angular/router
//    */
//   setRoutes(routes: Routes) {
//     this.routes = routes;
//   }

//   /**
//    * Redirecionar para a rota informada
//    *
//    * @param route rota para redirecionamento
//    */
//   navigateTo(route: string): void {
//     if (route.startsWith('/')) {
//       route = route.substring(1);
//     }

//     this.currentRoute = route;
//     this.routeChange.next(route);
//   }
// }
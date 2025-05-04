// import { Directive, Input, HostListener, HostBinding } from '@angular/core';
// import { IMfeRouterService } from '../services/router/router.service';


// @Directive({
//   /* eslint-disable @angular-eslint/directive-selector */
//   selector: '[mfeRouterLink]',
//   standalone: true,
//   providers: [],
// })
// export class IMfeRouterDirective {
//   /**
//    * Link para redirecionamento de rota
//    */
//   @Input()
//   @HostBinding('attr.href')
//   mfeRouterLink!: string;

//   /**
//    * @ignore
//    */
//   constructor(private routerService: IMfeRouterService) {}

//   /**
//    * Função para redirecionar o usuário para a rota informada
//    */
//   @HostListener('click')
//   navigate() {
    
//     this.routerService.navigateTo(this.mfeRouterLink);
//     return false;
//   }
// }

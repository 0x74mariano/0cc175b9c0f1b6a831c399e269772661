// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { IdsConfigModule } from '@ids/angular';
// import { RouterTestingModule } from '@angular/router/testing';
// import { Segments } from '@ids/tools';
// import { SharedModule } from 'src/app/shared/shared.module';
// import { IMfeRouterDirective } from './router.directive';
// import { environment } from 'src/environments/environment';
// import { IMfeRouterService } from '../services/router/router.service';
// import { CENARIO_CLICK_NAGECACAO_VALIDO } from './test/mock';
// import { ExampleRotasComponent } from 'src/app/examples/components/example/example-rotas/example-rotas.component';
// import { By } from '@angular/platform-browser';
// import { ELEMENTOS } from './test/elementos';

// describe('IMfeRouterDirective', () => {
//   let component: ExampleRotasComponent;
//   let fixture: ComponentFixture<ExampleRotasComponent>;


//   let mfeRouterServiceSpy!: { navigateTo: jest.Mock };
//   beforeEach(async () => {

//     mfeRouterServiceSpy = {
//       navigateTo: jest.fn()
//     };

//     await TestBed.configureTestingModule({
//     imports: [
//         FormsModule,
//         ReactiveFormsModule,
//         RouterTestingModule,
//         HttpClientTestingModule,
//         IdsConfigModule.forRoot({
//             production: environment.production,
//             segment: Segments.Varejo,
//         }),
//         SharedModule
//     ],
//     declarations: [ExampleRotasComponent, IMfeRouterDirective],
//     schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
//     providers: [
//         { provide: IMfeRouterService, useValue: mfeRouterServiceSpy },
//     ]
// })
//       .compileComponents();

//     fixture = TestBed.createComponent(ExampleRotasComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('Quando seleciona o click, Dado parâmetro de rota válido, Então deve acionar o serviço de navegar ', () => {
//     const btn =  fixture.debugElement.query(By.css(ELEMENTOS.BTN_PRIMEIRO));
//     btn.triggerEventHandler('click', null);

//     expect(mfeRouterServiceSpy.navigateTo).toHaveBeenNthCalledWith(1, CENARIO_CLICK_NAGECACAO_VALIDO.ROTA_ESPERADA);
//   });


  
// });

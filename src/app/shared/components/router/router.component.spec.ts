/* import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IdsConfigModule } from '@ids/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { Segments } from '@ids/tools';
import { SharedModule } from 'src/app/shared/shared.module';
import { IMfeRouterService } from '../../services/router/router.service';
import { MfeRouterComponent } from './router.component';
import { environment } from 'src/environments/environment';
import { CENARIO_INICIANDO_COMPONENTE_DEFAULT_VALIDO, CENARIO_INICIANDO_COMPONENTE_VALIDO, DefaultPaginaMockComponent } from './test/mock';
import { of } from 'rxjs';



describe('MfeRouterComponent', () => {
  let component: MfeRouterComponent;
  let fixture: ComponentFixture<MfeRouterComponent>;

  let changeDetectorRefSpy!: { detectChanges: jest.Mock };
  let mfeRouterServiceSpy!: { navigateTo: jest.Mock, setRoutes: jest.Mock, routeChange$: any, getCurrentRoute: any };

  beforeEach(async () => {



    mfeRouterServiceSpy = {
      navigateTo: jest.fn(),
      setRoutes: jest.fn(),
      routeChange$: of(""),
      getCurrentRoute: null as any
    };

    changeDetectorRefSpy = {
      detectChanges: jest.fn(),

    };
    await TestBed.configureTestingModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        IdsConfigModule.forRoot({
            production: environment.production,
            segment: Segments.Varejo,
        }),
        SharedModule
    ],
    declarations: [MfeRouterComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    providers: [
        { provide: IMfeRouterService, useValue: mfeRouterServiceSpy },
        { provide: ChangeDetectorRef, useValue: changeDetectorRefSpy },
    ]
})
      .compileComponents();

    fixture = TestBed.createComponent(MfeRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('Quando o componente inicializar, Dado Router válida E Router atual válido, Então deve criar o componente da rota atual #ngOnInit()', () => {

    const setRouterSpy = mfeRouterServiceSpy.setRoutes;

    mfeRouterServiceSpy.getCurrentRoute = CENARIO_INICIANDO_COMPONENTE_VALIDO.ROUTE;

    component.routes = CENARIO_INICIANDO_COMPONENTE_VALIDO.ROUTES;
    component.routeContent = {
      createComponent: jest.fn(),
      clear: jest.fn()
    } as any;

    component.ngOnInit();

    expect(setRouterSpy).toHaveBeenCalledWith(CENARIO_INICIANDO_COMPONENTE_VALIDO.ROUTES);
    expect(component.routeContent.clear).toHaveBeenCalled();
    expect(component.routeContent.createComponent).toHaveBeenCalled();

  });

  it('Quando o componente inicializar, Dado Router válida E RouterDefault válido E Não possuindo Router atual válido, Então deve criar o componente RouterDefault #ngOnInit()', () => {

    const setRouterSpy = mfeRouterServiceSpy.setRoutes;

    mfeRouterServiceSpy.getCurrentRoute = CENARIO_INICIANDO_COMPONENTE_DEFAULT_VALIDO.ROUTE;

    component.routes = CENARIO_INICIANDO_COMPONENTE_DEFAULT_VALIDO.ROUTES;
    component.routeContent = {
      createComponent: jest.fn(),
      clear: jest.fn()
    } as any;

    component.ngOnInit();

    expect(setRouterSpy).toHaveBeenCalledWith(CENARIO_INICIANDO_COMPONENTE_DEFAULT_VALIDO.ROUTES);
    expect(component.routeContent.clear).toHaveBeenCalled();
    expect(component.routeContent.createComponent).toHaveBeenCalledWith(DefaultPaginaMockComponent);

  });

});
 */
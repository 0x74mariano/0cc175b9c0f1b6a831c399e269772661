// tslint:disable
import { BehaviorSubject, of } from 'rxjs';
import { ContextService } from '@quickweb/mfe-context';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { EventTrackingService } from '@microfrontend/analytics';
import { FailDetail, MessageErrors, TypeErrors } from '../../models/error.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IdsConfigModule } from '@ids/angular';
import { LogService, OutputProcessService, RedirectService } from '@quickweb/mfe-core';
import { MainComponent } from './main.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Segments } from '@ids/tools';
import { TestBed } from '@angular/core/testing';

describe('MainComponent', () => {
  const eventSourceContextServiceMock: BehaviorSubject<any> = new BehaviorSubject<any>({
    segmento: 'Varejo',
  });

  const contextoServiceMock: any = {
    insert: jest.fn(),
    listFails: jest.fn(),
    obtain: () => ({ segmento: 'varejo' }),
  };

  const eventTrackingServiceMock: any = {
    listen: () => of(''),
  };

  const redirectServiceMock: any = {
    listen: () => of(''),
  };

  const logServiceMock: any = {
    listen: () => of(''),
  };

  const outputProcessServiceMock: any = {
    listen: () => of(''),
  };


  const contextServiceMock = {
    eventSource: eventSourceContextServiceMock,
    eventSource$: eventSourceContextServiceMock.asObservable(),
    emit: jest.fn(),
    refreshSource: of(''),
  };

  const routerMock = {
    navigate: jest.fn(),
  };

  let fixture: any;
  let component: MainComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        IdsConfigModule.forRoot({
            segment: Segments.Varejo,
        }),
        MainComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    providers: [
        { provide: ContextService, useValue: contextServiceMock },
        { provide: EventTrackingService, useValue: eventTrackingServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: LogService, useValue: logServiceMock },
        { provide: RedirectService, useValue: redirectServiceMock },
        { provide: OutputProcessService, useValue: outputProcessServiceMock },    ]
})
      .overrideComponent(MainComponent, {
        set: {
          providers: [
            { provide: ContextService, useValue: contextServiceMock },
            { provide: EventTrackingService, useValue: eventTrackingServiceMock },
            { provide: Router, useValue: routerMock },
            { provide: LogService, useValue: logServiceMock },
            { provide: RedirectService, useValue: redirectServiceMock },
            { provide: OutputProcessService, useValue: outputProcessServiceMock },
          ],
        },
      })
      .compileComponents();
    fixture = TestBed.createComponent(MainComponent);
    // component = fixture.debugElement.componentInstance;
  });

  it('Valida criação do componente #constructor()', async () => {
    expect(component).toBeTruthy();
  });



  it('deve assinar os eventos do mfe, quando iniciar o componente e receber um evento, o resultado esperado é o evento ser emitido para mfe core', () => {
    contextoServiceMock.listFails = () => [];
    component.ngOnInit();

    expect(contextoServiceMock.insert).toHaveBeenCalled();
  });

  it('Dado a inicialização do componente, Quando o contexto é inválido, Então deve enviar a mensagem de falha no console', () => {
    contextoServiceMock.listFails = (): FailDetail[] => [
      {
        message: MessageErrors.MENSAGEM_TITULO,
        typeError: TypeErrors.INVALID_REGISTER
      },
    ];
    component.ngOnInit();

    expect(contextoServiceMock.insert).toHaveBeenCalled();

  });

  it('deve assinar os eventos do mfe, quando iniciar o componente e receber um evento, o resultado esperado é o evento ser emitido para mfe core', () => {
    contextoServiceMock.listFails = () => [];
    component.ngOnChanges();

    expect(contextoServiceMock.insert).toHaveBeenCalled();
  });


});

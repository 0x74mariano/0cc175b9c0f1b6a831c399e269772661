// import { TestBed } from '@angular/core/testing';
// import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'dynamicCats'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('dynamicCats');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('.content span')?.textContent).toContain('dynamicCats app is running!');
//   });
// });
// // tslint:disable
// import { AppComponent } from './app.component';
// import { environment } from '../environments/environment';
// import { IdsConfigModule } from '@ids/angular';
// import { RouterTestingModule } from '@angular/router/testing';
// import { Segments } from '@ids/tools';
// import { SimpleChange, SimpleChanges } from '@angular/core';
// import { TestBed } from '@angular/core/testing';

// describe('AppComponent', () => {
//   let fixture: any;
//   let component: any;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//     imports: [
//         IdsConfigModule.forRoot({
//             production: environment.production,
//             segment: Segments.Varejo,
//         }),
//         RouterTestingModule,
//         AppComponent
//     ],
//     providers: []
// }).compileComponents();

//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.debugElement.componentInstance;
//   });

//   it('Valida criação do componente #constructor', () => {
//     expect(component).toBeTruthy();
//   });

//   it('Valida se o contexto é setado quando ocorre atualizações de context #ngOnChanges()', async () => {
//     const changes: SimpleChanges = {
//       context: new SimpleChange('', '{ "token": "", "segmento": "varejo" }', false),
//       reload: new SimpleChange(false, true, false),
//     };
//     component.ngOnChanges(changes);
//     expect(component.contextBase).toEqual({ token: '', segmento: 'varejo' });
//   });

//   it('Valida eventos de interação recebidos #interactionEvents()', async () => {
//     const interactionEventExpect = { name: 'logEvent', data: { teste: 'teste' } };
//     jest.spyOn(component.interactionEvent, "emit");
//     component.interactionEvents(interactionEventExpect);
//     expect(component.interactionEvent.emit).toBeCalled();
//     expect(component.interactionEvent.emit).toHaveBeenCalledWith(interactionEventExpect);
//   });

//   it('Valida se o contexto recebido é valido  #isContextValid()', async () => {
//     component.contextBase = {};
//     expect(component.isContextValid).toBeTruthy();
//   });

//   it('Valida se o contexto recebido é invalido  #isContextValid()', async () => {
//     component.contextBase = null;
//     expect(component.isContextValid).toBeFalsy();
//   });
// });

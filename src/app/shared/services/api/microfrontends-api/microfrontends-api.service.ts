// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { MOCK_MICROFRONTENDS } from '../mocks/mock-microfrontends';

// @Injectable({
//   providedIn: 'root'
// })
// export class MicrofrontendsApiService {

//   constructor() { }

//   listMicrofrontends(): Observable<any[]> {
//     return of(MOCK_MICROFRONTENDS);
//   }

//   getMicrofrontendById(id: string): Observable<any> {
//     const microfrontend = MOCK_MICROFRONTENDS.find(mf => mf.id === id);
//     return of(microfrontend);
//   }

//   getMicrofrontendByTag(tag: string): Observable<any> {
//     const microfrontend = MOCK_MICROFRONTENDS.find(mf => mf.name === tag);
//     return of(microfrontend);
//   }
// }
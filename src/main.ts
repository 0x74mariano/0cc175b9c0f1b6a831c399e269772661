import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent)
  .catch(err => console.error(err));


// import { BrowserModule, createApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { importProvidersFrom } from '@angular/core';
// import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// import { LogModule } from '@quickweb/mfe-core';
// import { createCustomElement } from '@angular/elements';
// import { ConstantConfig } from './app/shared/models/constant-config';
// import { MfeHttpClientModule } from '@quickweb/mfe-http-client';
// import { environment } from './environments/environment';
// import { ContextService } from '@quickweb/mfe-context';



// (async () => {


//   const app = await createApplication({

//     providers: [
//       ContextService,
//       importProvidersFrom(BrowserModule),
//       provideHttpClient(withInterceptorsFromDi()),
//       importProvidersFrom(LogModule.forRoot({ appName: "", appVersion: "" })),
//       importProvidersFrom(MfeHttpClientModule.forRoot({ entrypoint: environment.entryPointCaronteUrl, isEncrypted: true, charonId: 'localc' }))


//     ],
//   });

//   const toogleElement = createCustomElement(AppComponent, {
//     injector: app.injector,
//   });

//   customElements.define(ConstantConfig.TAG, toogleElement);

// })();

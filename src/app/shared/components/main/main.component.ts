// import { ConstantConfig } from '../../models/constant-config';
// import { ContextAppService } from '../../services/context-app/context-app.service';
// import { ContextService, IContext } from '@quickweb/mfe-context';
// import { EventEmitter } from '@angular/core';
// import { EventTrackingService } from '@microfrontend/analytics';
// import { FailDetail } from '../../models/error.model';
// import { HostBinding } from '@angular/core';
// import { ILogEntry, IMfeInteractionEvent, LogModule, LogService, OutputProcessService, RedirectService, TokenService } from '@quickweb/mfe-core';
// import { Input } from '@angular/core';
// import { InputData } from '../../models/inputdata.model';
// import { Output } from '@angular/core';
// import { SegmentService } from '../../services/segment/segment.service';
// import { Subscription, filter, tap } from 'rxjs';
// import { IMfeRouterService } from '../../services/router/router.service';
// import { IdsAlertComponent } from '@ids/angular';
// import { IdsOverlayMfeContainer } from 'src/app/core/overrides/ids-overlay-mfe-container/ids-overlay-mfe-container';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormsComponent } from 'src/app/forms/components/mf-forms.component';

/**
 * Esse componente é estratégico, o mesmo é instanciado apenas uma vez
 * a cada inserção do AppComponent no DOM, assim todas as services serão
 * criadas para esse componente, de maneira única e desacoplada e os componentes
 * filhos que consumir as services listadas aqui herdarão a mesma instancia,
 * caso seja adicionado no DOM outra instancia desse WebComponent (app.component)
 * será feito novas instancias desacopladas.
 *
 * Para entender mais veja o vídeo abaixo:
 * https://iconectados.sharepoint.com/:v:/s/Plataforma360i/EdpQW1owrTdLi83do6X01ZwB2Ya5nJtHuHEasK5aMrJnOA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZyIsInJlZmVycmFsQXBwUGxhdGZvcm0iOiJXZWIiLCJyZWZlcnJhbE1vZGUiOiJ2aWV3In19&e=UQSfKW
 * @export
 * @class MainComponent
 * @implements {OnDestroy}
 */
@Component({
  selector: 'mf-forms-main',
  templateUrl: './main.component.html',
  standalone: true,
  encapsulation: ViewEncapsulation.None, 
  styleUrls: ['main.component.scss'],
  imports: [
    FormsComponent,
    CommonModule,
  ], 
/*   imports: [
    IdsAlertComponent,
    FormsComponent,
    CommonModule,
    LogModule,

    
  ], */
  providers: [],
/*   providers: [SegmentService, ContextAppService, IMfeRouterService, ContextService, LogService, TokenService, IdsOverlayMfeContainer],
 */})
export class MainComponent implements OnDestroy {

  /**
   * Atributo que define a classe do segmento
   *
   * @memberof MainComponent
   */
/*   @HostBinding('attr.class') segment = '';
 */
  /**
   * Atributo que define o style do componente
   *
   * @memberof MainComponent
   */
/*   @HostBinding('attr.style') style = "font-family: 'Itau Text'";
 */
  /**
   * Variável de entrada que define o context do componente
   *
   * @memberof MainComponent
   */
/*   @Input() context: IContext<InputData>;
 */
  /**
   * Variável de saída que emite eventos para o AppComponent
   *
   * @memberof MainComponent
   */
/*   @Output() interactionEventLib: EventEmitter<IMfeInteractionEvent> = new EventEmitter<IMfeInteractionEvent>();
 */
  /**
   * Variável que define se o contexto é válido
   *
   * @memberof MainComponent
   */
 /*  public isContextValid = false; */

  /**
   * Variável que define a lista de assinaturas
   *
   * @private
   * @type {Subscription[]}
   * @memberof MainComponent
   */
 /*  private subscribes: Subscription[] = [];
 */
  /**
   * Variável que define a lista de falhas
   *
   * @type {FailDetail[]}
   * @memberof MainComponent
   */
/*   public listFails: FailDetail[] = [];

  constructor(
    private contextAppService: ContextAppService,
    private contextService: ContextService,
    private trackService: EventTrackingService,
    private logService: LogService,
    private outputProcessService: OutputProcessService,
    private redirectService: RedirectService,
    private segmentService: SegmentService,
  ) { }

  
  ngOnChanges(): void {
    this.updateComponent();
    }
    
    */
 ngOnInit(): void {
  //  this.initialize();
  //  this.subscribeEvents();
 }
 ngOnDestroy(): void {
 //  this.subscribes.forEach(x => x.unsubscribe());
 }
 /**
   * Método que valida o contexto
   *
   * @returns {boolean}
   * @memberof MainComponent
   */
/*   public validateContext(): boolean {
    this.isContextValid = this.contextAppService.listFails(this.context).length === 0;
    return this.isContextValid;
  } */

  /**
   * Método que atualiza o componente
   *
   * @private
   * @memberof MainComponent
   */
/*   private updateComponent(): void {
    // if (this.validateContext()) this.startComponent();
    // else this.showMessageFails();
  } */

  /**
   * Método que inicia o componente
   *
   * @private
   * @memberof MainComponent
   */
/*   private initialize(): void {
    this.initializeConfig();
    this.updateComponent();
  }
 */
  /**
   * Método que inicia a configuração
   *
   * @private
   * @memberof MainComponent
   */
/*   private initializeConfig(): void {
    this.contextAppService.insert(this.context);
    this.insertSegment(this.contextAppService.obtain().segmento);
  } */

  /**
   * Método que mostra as falhas
   *
   * @private
   * @memberof MainComponent
   */
  // private showMessageFails(): void {
  //   this.listFails = this.contextAppService.listFails(this.context);
  // }

  /**
   * Método que inicia o componente
   *
   * @private
   * @memberof MainComponent
   */
  // private startComponent(): void {
  //   // this.contextAppService.insert(this.context);
  //   // this.contextService.emit(this.context);
  // }

  /**
   * Método que insere a classe de segmento
   *
   * @private
   * @param {*} segment
   * @memberof MainComponent
   */
/*   private insertSegment(segment: any): void {
    this.segment = `${ConstantConfig.SEGMENT_CLASS}${this.obtainSegment(segment)}`;
  } */

  /**
   * Método que obtém o segmento atual
   *
   * @private
   * @param {*} segment
   * @returns {string}
   * @memberof MainComponent
   */
/*   private obtainSegment = (segment: any): string =>
    segment !== undefined ? segment : ('varejo' as any);
 */
  /**
   * Método que assina os eventos
   *
   * @private
   * @memberof MainComponent
   */
/*   private subscribeEvents(): void {
    this.subscribeEventsLog();
    this.subscribeEventsRefresh();
    this.subscribeEventsOutput();
    this.subscribeEventsTracking();
    this.subscribeEventRedirect();
    this.subscribeSegment();
  } */

  /**
   * Método que assina o segmento
   *
   * @private
   * @memberof MainComponent
   */
/*   private subscribeSegment(): void {
    this.subscribes.push(
      this.segmentService.eventSource$.subscribe((segment: string) => this.insertSegment(segment)),
    );
  } */

  /**
   * Método que assina os eventos de log
   *
   * @private
   * @memberof MainComponent
   */
/*   private subscribeEventsLog(): void {
    this.subscribes.push(
      this.logService
        .listen()
        .pipe(
          filter(result => result != null),
          tap((result: ILogEntry) => {
            this.interactionEventLib.emit({ name: 'logEvent', data: result });
          })
        )
        .subscribe()
    );
  } */

  /**
   * Método que assina os eventos de refresh
   *
   * @private
   * @memberof MainComponent
   */
/*   private subscribeEventsRefresh(): void {
    this.subscribes.push(
      this.contextService.refreshSource.pipe(
        filter(result => result !== null),
        tap(() => {
          this.interactionEventLib.emit({
            name: 'refreshTokenEvent',
            data: this.contextService.getContext,
          });
        })
      ).subscribe()
    );
  } */

  /**
   * Método que assina os eventos de output
   *
   * @private
   * @memberof MainComponent
   */
/*   private subscribeEventsOutput(): void {
    this.subscribes.push(
      this.outputProcessService
        .listen()
        .pipe(
          filter(result => result !== null),
          tap((result: any) => {
            this.interactionEventLib.emit({ name: 'outputProcessEvent', data: result });
          })
        )
        .subscribe()
    );
  } */

  /**
   * Método que assina os eventos de analytcs
   *
   * @private
   * @memberof MainComponent
   */
/*   private subscribeEventsTracking(): void {
    this.subscribes.push(
      this.trackService
        .listen()
        .pipe(
          filter(x => x !== null),
          tap((result: any) => {
            this.interactionEventLib.emit({ name: 'analyticsEvent', data: result });
          })
        )
        .subscribe()
    );
  } */

  /**
   * Método que assina os eventos de redirect
   *
   * @private
   * @memberof MainComponent
   */
/*   private subscribeEventRedirect(): void {
    this.subscribes.push(
      this.redirectService
        .listen()
        .pipe(
          filter(result => result !== null),
          tap((result: any) => {
            this.interactionEventLib.emit({ name: 'redirectEvent', data: result });
          })
        )
        .subscribe()
    );
  }
  */
}
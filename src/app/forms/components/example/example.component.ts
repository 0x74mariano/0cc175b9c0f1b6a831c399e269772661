import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone:true,
  selector: 'app-mf-formulario-dinamico-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  imports:[
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class ExampleComponent implements OnInit {
  jsonData: any = [];
  saidaEsperada: any = {};
  saidaEsperadaString: string = "";
  meuValor: string = "string"

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onChangeDynamicForm(event: Event){
    let eventData = event.target as HTMLInputElement;
    let data: any = {};
    if(eventData.id.includes('.')){
      let eventDataParts = eventData.id.split(".");
      eventDataParts.forEach((item:string, i:number) => {
        if(i === eventDataParts.length - 1){
          data[item] = eventData.value;
        }
        if(i !== 0)
        {
          data = data[item];
        }
        else{
          data = this.saidaEsperada;
        }
      })
    }
    else{
      this.saidaEsperada[eventData.id] = eventData.value;
    }
    this.saidaEsperadaString = JSON.stringify(this.saidaEsperada)
  }

  onTextAreaChange(event: Event){
    const value = (event.target as HTMLTextAreaElement).value;
    this.jsonData = JSON.parse(value);
    this.saidaEsperada = {};
    this.jsonData.forEach((item:any) =>{
      if(item.tipo_dado === 'string'){
        this.saidaEsperada[item.contrato] = "";
      }
      if (item.tipo_dado === 'array') {
        let subItemObjeto: any = {};
        this.saidaEsperada[item.contrato] = subItemObjeto
        item.conteudo.foreach((subItem: any) => {
          subItemObjeto[subItem.contrato] = "";
        })
      }
    })
    this.saidaEsperadaString = JSON.stringify(this.saidaEsperada, null, 2);
    console.log(this.saidaEsperadaString);
    this.meuValor = this.saidaEsperadaString;
    this.cdr.detectChanges();
  }
    

  form = new FormGroup({
    autoResize: new FormControl(''),
  })

}

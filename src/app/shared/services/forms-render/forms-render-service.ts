import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FormsRenderService {
  private jsonSubject = new BehaviorSubject<object[]>([]);
  private dynamicFormSubject = new BehaviorSubject<object[]>([]);
  data$ = this.jsonSubject.asObservable();
  dynamicFormData$ = this.dynamicFormSubject.asObservable();

  updateData(jsonArray: object[]) {
    this.jsonSubject.next(jsonArray);
  }

  updateDynamicForm(dynamicFormJson: object[]) {
    this.jsonSubject.next(dynamicFormJson);
  }

  sendFieldInputEvent(id: string, value: string) {
    let jsonPath = id
      .split('.')
      .slice(1)
      .map((item) => {
        let index = Number.parseInt(item);
        if (Number.isNaN(index)) {
          return index;
        }
        return item;
      });
  }
}

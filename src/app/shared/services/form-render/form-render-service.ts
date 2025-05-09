import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FormsRenderService {
  private jsonSubject = new BehaviorSubject<object[]>([]);
  data$ = this.jsonSubject.asObservable();

  updateData(jsonArray: object[]) {
    this.jsonSubject.next(jsonArray);
  }

}
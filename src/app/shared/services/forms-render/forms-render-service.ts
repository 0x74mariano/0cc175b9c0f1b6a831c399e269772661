import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class FormsRenderService {
  private jsonSubject = new BehaviorSubject<Array<object>>([]);
  data$ = this.jsonSubject.asObservable();

  updateData(jsonArray: Array<object>) {
    this.jsonSubject.next(jsonArray);
  }
}
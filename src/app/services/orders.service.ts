import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private url = "https://sheetdb.io/api/v1/uhc04ogrq79n3";
  constructor(private http: HttpClient) { }
  orderuser(data:any) :Observable<any>{
    return this.http.post(this.url,{data:[data]});
  }
}

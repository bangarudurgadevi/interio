import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interiodesign } from '../models/interiodesign';

@Injectable({
  providedIn: 'root'
})
export class InteriodesignService {
   private baseurl="assets/json/interiordesign.json";
  constructor(private http:HttpClient) { }
  getproducts():Observable<Interiodesign[]> {
    return this.http.get<Interiodesign[]>(this.baseurl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PhoneData {
  name: string;
  images?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class PhoneService {
  constructor(private http: HttpClient) {}

  query(): Observable<PhoneData[]> {
    return this.http.get<PhoneData[]>(`./phones/phones.json`);
  }

  get(id: string): Observable<PhoneData> {
    return this.http.get<PhoneData>(`./phones/${id}.json`);
  }
}

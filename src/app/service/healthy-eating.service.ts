import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HealthyEatingService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  getAllFruits(): Observable<any> {
    return this.http.get(`${this.baseUrl}/fruit/all`);
  }
}

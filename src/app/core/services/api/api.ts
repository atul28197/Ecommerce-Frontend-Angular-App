import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  get<T>(url: string, params?: any): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${url}`, {
      params: this.toParams(params)
    });
  }

  post<T>(url: string, body?: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${url}`, body);
  }

  put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}${url}`, body);
  }

  delete<T>(url: string, params?: any): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}${url}`, {
      params: this.toParams(params)
    });
  }

  private toParams(params: any): HttpParams {
    let hp = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        hp = hp.set(key, params[key]);
      });
    }
    return hp;
  }
}

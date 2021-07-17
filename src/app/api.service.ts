import { Details } from './details';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http://localhost/employee_api/";
  constructor(private httpClient: HttpClient) { }
  
  
  readDetails(): Observable<Details[]>{
    return this.httpClient.get<Details[]>(`${this.PHP_API_SERVER}api/read.php`);
  }

  createDetails(details: Details): Observable<Details>{
    return this.httpClient.post<Details>(`${this.PHP_API_SERVER}api/create.php`, details);
  }

  updateDetails(details: Details): Observable<Details>{
    return this.httpClient.post<Details>(`${this.PHP_API_SERVER}api/update.php`, details);   
  }

  deleteDetails(id: number){
    return this.httpClient.delete<Details>(`${this.PHP_API_SERVER}api/delete.php/?id=${id}`);
  }
}

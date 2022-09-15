import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';
import { Serie } from '../model/serie.model';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  



  constructor(
    private httpClient: HttpClient
  ) { }

  public getCharacter(url: string): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(url);
  }


}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Offer} from '../model/Offer';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  catalogUrl = '/api/catalog';

  offers: Offer[] = [
    {id: '1', name: 'qwe1', price: '100', category: 'TOOLS'},
    {id: '2', name: 'qwe2', price: '1000', category: 'TOOLS'},
    {id: '3', name: 'qwe3', price: '10000', category: 'TOOLS'},
    {id: '4', name: 'qwe4', price: '10', category: 'TOOLS'},
    {id: '5', name: 'qwe5', price: '160', category: 'TOOLS'},
    {id: '6', name: 'qwe6', price: '180', category: 'TOOLS'}
  ];

  constructor(private http: HttpClient) {
  }

  getCatalogList(): Observable<Offer[]> {
    /*return this.http.get<Offer[]>(`${this.startupUrl}/startup-list`)
      .pipe(catchError((error: any) => throwError(error.error)));*/
    return of(this.offers);
  }
}

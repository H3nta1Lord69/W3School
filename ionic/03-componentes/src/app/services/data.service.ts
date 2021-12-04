import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Components } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getUsers() {

    return this.http.get('https://jsonplaceholder.typicode.com/users');
    
  }

  getmenuOpts() {

    return this.http.get<Components[]>('/assets/data/menu-opts.json');
    
  }

}

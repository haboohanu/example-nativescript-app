import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl = "https://localhost:7015/api/";

  constructor(private http: HttpClient,){

  }


  // public getContacts() {
	// 	return this.http.get<any[]>(`${this.baseUrl}Contacts/`);
	// }
  public getContacts() {
		return this.http.get<any[]>('https://localhost:7015/api/Contacts/');
	}
}

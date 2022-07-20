import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, of, tap, throwError } from "rxjs";
import { ContactModel } from "../models/contact.model";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  baseUrl = "https://localhost:7015/api/";

  constructor(private http: HttpClient) {}

  // public getContacts() {
  // 	return this.http.get<any[]>(`${this.baseUrl}Contacts/`);
  // }
  getContacts() {
    let options = this.createRequestOptions();
    return this.http
      .get<any>("https://randomuser.me/api/?results=25", { headers: options })
      .pipe(
        catchError((error: Error) => {
          return throwError(() => new Error(`Error Message:${error.message} \nError ${error.name}`));
        }),
        map((response) => ({
          results: response.results,
        })),
        tap((res) => {
          if (res) {
            console.log(res);
            return of(true); // getRequest successful
          }
        })
      );
  }

  private createRequestOptions() {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return headers;
  }
}

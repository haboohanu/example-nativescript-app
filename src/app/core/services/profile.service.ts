import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, of, tap, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  baseUrl = "https://localhost:7015/api/";

  constructor(private http: HttpClient) {}

  // public getContacts() {
  // 	return this.http.get<any[]>(`${this.baseUrl}Contacts/`);
  // }
  getProfile() {
    let options = this.createRequestOptions();
    return this.http
      .get<any>("https://randomuser.me/api/?seed=2d2be7e40a821fe2", { headers: options })
      .pipe(
        catchError((error: Error) => {
          return throwError(() => new Error(`Error Message:${error.message} \nError ${error.name}`));
        }),
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

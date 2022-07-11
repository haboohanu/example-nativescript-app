import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, Observable, of, tap, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CourtService {
  baseUrl = "https://localhost:7015/api/";

  constructor(private http: HttpClient) {}


  getDockets() {
    let options = this.createRequestOptions();
    return this.http
      .get<any>("https://www.courtlistener.com/api/rest/v3/clusters/", { headers: options })
      .pipe(
        catchError((error: Error) => {
          return throwError(() => new Error(`Error Message:${error.message} \nError ${error.name}`));
        }),
        map((response) => ({
          results: response.results,
        })),
        tap((res) => {
          if (res) {
            return of(true); // getRequest successful
          }
        })
      );
  }


  getCourts() {
    let options = this.createRequestOptions();
    return this.http
      .get<any>("https://www.courtlistener.com/api/rest/v3/courts/", { headers: options })
      .pipe(
        catchError((error: Error) => {
          return throwError(() => new Error(`Error Message:${error.message} \nError ${error.name}`));
        }),
        map((response) => ({
          results: response.results,
        })),
        tap((res) => {
          if (res) {
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

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, mergeMap, of, tap, throwError } from "rxjs";
import { ContactModel } from "../../../core/models/contact.model";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ContactService } from "../../../core/services/contact.service";
import * as AppointmentActions from './appointment.actions'

@Injectable({
  providedIn: "root",
})
export class AppointmentEffects {
  constructor(
    private actions$: Actions,
    private contactService: ContactService
  ) {}

  loadContacts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppointmentActions.loadContacts),
      mergeMap(()=> this.contactService.getContacts().pipe(
        map(contacts => AppointmentActions.loadContactsSuccess({contacts}))
      ))
    )
  })
}

import { ContactModel } from "./contact.model";
import { CourtModel } from "./court.model";

export interface AppointmentModel{
  court: CourtModel;
  date: Date;
  time: Date;
  judge: ContactModel

}

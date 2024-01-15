import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { BaseService } from './base/base.service';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService extends BaseService<Appointment> {
  override path: string = 'appointments';

}

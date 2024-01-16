
import { AppointmentAddComponent } from './appointment-add/appointment-add.component';
import { AppointmentService } from './../../../services/appointment.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Appointment } from '../../../models/appointment';
import { RouterLink } from '@angular/router';
import { AppointmentUpdateComponent } from './appointment-update/appointment-update.component';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    AppointmentAddComponent,
    AppointmentUpdateComponent,
  ],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss',
})
export class AppointmentComponent implements OnInit {
  appointments: Appointment[] = [];
  users: User[] = [];
  @ViewChild(AppointmentAddComponent, { static: true })
  addAppointmentComponent!: AppointmentAddComponent;
  @ViewChild(AppointmentUpdateComponent, { static: true })
  updateAppointmentComponent!: AppointmentUpdateComponent;

  constructor(
    private appointmentService: AppointmentService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getList();
    this.getUserList();
  }

  findUserById(userId: number) {
    return this.users.find((user) => user.id === userId);
  }
  getUserList() {
    this.userService.getAll().subscribe((res) => {
      this.users = res.data;
    });
  }

  getList() {
    this.appointmentService.getAll().subscribe((result) => {
      this.appointments = result.data;
    });
  }
  showAddModal() {
    this.addAppointmentComponent.createCreateForm();
  }
   showEditModal(appointment:Appointment|null){
     if(appointment==null) return;
    this.updateAppointmentComponent.createUpdateForm(appointment);
   }
  deleteAppointmentById(id:number){
     this.appointmentService.deleteById(id).subscribe(result=>{
      this.getList();
     })
   }
}

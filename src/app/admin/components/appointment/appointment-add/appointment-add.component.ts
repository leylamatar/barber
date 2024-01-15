import { Appointment } from './../../../../models/appointment';
import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppointmentService } from '../../../../services/appointment.service';

@Component({
  selector: 'app-appointment-add',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './appointment-add.component.html',
  styleUrl: './appointment-add.component.scss',
})
export class AppointmentAddComponent {
  createForm!: FormGroup;
  @Output() onLoad: EventEmitter<unknown> = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private appointmentService: AppointmentService
  ) {}

  createCreateForm() {
    this.createForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      completed: ['', Validators.required],
    });
  }
  onSubmit() {
    if (!this.createForm.valid) {
      this.toastrService.warning('Please check the form.', 'Warning');
      return;
    }
    let appointment: Appointment = Object.assign(this.createForm.value);
    this.appointmentService.create(appointment).subscribe((result) => {
      if (typeof document == undefined) return;
      document.querySelector('.create-modal')?.classList.toggle('show');
      document.querySelector('.modal-backdrop')?.classList.toggle('show');
      this.onLoad.emit();
    });
  }
}

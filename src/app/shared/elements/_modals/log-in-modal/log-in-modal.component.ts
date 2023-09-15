import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'log-in-modal',
  standalone: true,
  templateUrl: './log-in-modal.component.html',
  styleUrls: ['./log-in-modal.component.scss'],
  providers: [NgbModalConfig, NgbModal],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
})
export class LogInModalComponent implements OnInit {
  constructor(
    private config: NgbModalConfig,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private auth: AuthService,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  logInForm!: FormGroup;

  ngOnInit() {
    this.logInForm = this.fb.group({
      nickName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  open(content: any): void {
    this.modalService.open(content, { backdrop: true, centered: true });
  }

  submitForm() {
    console.log(this.logInForm.value);
  }
}

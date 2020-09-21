import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgetPasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit() {
    this.authService.forgetPassword(this.forgetPasswordForm.value).subscribe((response: any) => {
      this.forgetPasswordForm.reset();
      this.toastr.clear();
      this.toastr.success('Please check your email to reset your password.', 'Success!');
    });
  }

}

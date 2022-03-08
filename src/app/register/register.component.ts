import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  requestOtp = false;
  aadharnumber;
  agreed: boolean;
  otpNumber;
  userVerified = false;
  verificationProcessing = false;
  aadharVerificationProcessing = false;
  showOtpHelper = false;
  constructor() { }

  ngOnInit(): void {
  }

  isAdharNumValid = () => {
    if (this.aadharnumber) {
      const [first, second, third] = this.aadharnumber.split('-');
      if (Number(first) && Number(second) && Number(third)) {
        return true;
      }
    }

    return false;
  }

  onSubmit = () => {
    this.aadharVerificationProcessing = true;
    setTimeout(() => {
      this.aadharVerificationProcessing = false;
      this.showOtpHelper = true;
    }, 5000);
  }

  verifyOTP = () => {
    this.verificationProcessing = true;
    this.requestOtp = false;
    this.aadharnumber = null;
    this.otpNumber = null;
    setTimeout(() => {
      this.userVerified = true;
      this.verificationProcessing = false;
    }, 6000);
  }

  isOtpDisabled = () => {
    if (this.otpNumber) {
      const [first] = this.otpNumber.split('-');
      if (Number(first)) {
        return true;
      }
    }

    return false;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToRegister = () => {
    localStorage.setItem('userLogged', 'true');
    this.router.navigate(['/register']);
  }

}

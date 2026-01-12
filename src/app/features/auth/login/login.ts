import { Component } from '@angular/core';
import{Auth} from '../../../core/services/auth/auth';     
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
constructor(private auth: Auth, private router: Router) {}
}

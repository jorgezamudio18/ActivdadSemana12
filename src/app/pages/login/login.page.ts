import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService,
    private router: Router, private ac: AlertController) {this.buildForm();}

  ngOnInit() {
  }

  // async loginUser(event: Event): Promise<void> {
  //   event.preventDefault();
  //   if (this.loginForm.valid) {
  //     const value = this.loginForm.value;
  //     this.authService.loginUser(value.email, value.password).then(() => {
  //       this.router.navigateByUrl('home');
  //     }, async error => {
  //       const alert = await this.ac.create({
  //         message: error.message, buttons: [{ text: 'OK', role: 'cancel' }],
  //       });
  //       await alert.present();
  //     });
  //   }
  // }
  private buildForm(){
    this.loginForm = this.formBuilder.group({
      emain: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength]]
    });
  }

}

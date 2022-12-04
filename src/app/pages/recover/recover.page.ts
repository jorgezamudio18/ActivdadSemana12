import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {
  recoverForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService,
    private router: Router, private ac: AlertController) {this.buildForm();}
  // resetPassword(event: Event): void {
  //   event.preventDefault();
  //   if (this.recoverForm.valid) {
  //     const value = this.recoverForm.value;
  //     this.ac.rpassword(value.email).then(
  //       async () => {
  //         const alert = await this.ac.create({
  //           message: 'Revisa tu correo, te que enviamos',
  //           buttons: [{
  //             text: 'OK', role: 'cancel', handler: () => {
  //               this.router.navigateByUrl('login');
  //             },
  //           },],
  //         });
  //         await alert.present();
  //       },
  //       async error => {
  //         const erroralert = await this.ac.create({
  //           message: error.message, buttons: [{ text: 'OK', role: 'cancel' }],
  //         });
  //         await erroralert.present();
  //       });
  //   }
  // }
  ngOnInit() {
  }
  buildForm(){
    this.recoverForm = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
    });
  }

}

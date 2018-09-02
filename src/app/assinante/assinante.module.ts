import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
  ],
  declarations: [],
  providers: [
    AuthService,
    UserService
  ]
})
export class AssinanteModule { }

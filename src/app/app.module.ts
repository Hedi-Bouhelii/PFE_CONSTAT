import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserBoardComponent } from './components/dashboard/user-board/user-board.component';
import { AdminBoardComponent } from './components/dashboard/admin-board/admin-board.component';
import { AgenceBoardComponent } from './components/dashboard/agence-board/agence-board.component';
import { ExpertBoardComponent } from './components/dashboard/expert-board/expert-board.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UserDashComponent } from './components/user-dash/user-dash.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings/settings.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { AddexpertComponent } from './components/addexpert/addexpert.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { ListAgenceComponent } from './components/Listes/list-agence/list-agence.component';
import { ListUsersComponent } from './components/Listes/list-users/list-users.component';
import { ListExpertsComponent } from './components/Listes/list-experts/list-experts.component';
import { ForgotComponent } from './components/auth/forgot/forgot.component';
import { ConstatComponent } from './components/constat/constat.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { TestingComponent } from './testing/testing.component';
import { SendToExpertComponent } from './components/send-to-expert/send-to-expert.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ListConstatComponent } from './components/Listes/list-constat/list-constat.component';
import { AddConstatComponent } from './components/add-constat/add-constat.component';
import { HistoryComponent } from './components/history/history.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu'
import { VerifierConstatComponent } from './components/verifier-constat/verifier-constat.component';
import {MatIconModule} from '@angular/material/icon';
import { ManageAccountComponent } from './components/settings/manage-account/manage-account.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SuiviConstatComponent } from './components/suivi-constat/suivi-constat.component';
import { ListComponent } from './components/Listes/list-constat/list/list.component';
import { ContactPageComponent } from './components/home/contact-page/contact-page.component';
import { FirstPageComponent } from './components/home/first-page/first-page.component';
import {  NavBarhomePageComponent } from './components/home/nav-bar/nav-bar.component';
import { SecondPageComponent } from './components/home/second-page/second-page.component';
import { ThirdPageComponent } from './components/home/third-page/third-page.component';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/home/help/help.component';
import { FourthPageComponent } from './components/home/fourth-page/fourth-page.component';
import { ContactComponent } from './components/contact/contact.component';
// import { Error404Component } from './components/errors/error404/error404.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserBoardComponent,
    AdminBoardComponent,
    AgenceBoardComponent,
    ExpertBoardComponent,
    UserDashComponent,
    ProfileComponent,
    SettingsComponent,
    FileUploadComponent,
    AddexpertComponent,
    ListAgenceComponent,
    ListUsersComponent,
    ListExpertsComponent,
    ForgotComponent,
    ConstatComponent,
    TestingComponent,
    SendToExpertComponent,
    ListConstatComponent,
    AddConstatComponent,
    HistoryComponent,
    VerifierConstatComponent,
    ManageAccountComponent,
    SuiviConstatComponent,
    ListComponent,
    FirstPageComponent,
    NavBarhomePageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    ContactPageComponent,
    HomeComponent,
    HelpComponent,
    FourthPageComponent,
    ContactComponent,
    // Error403Component,
    // Error404Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatSlideToggleModule,
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatExpansionModule,
    MatDialogModule,
    MatChipsModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  providers: [
    DatePipe // Add DatePipe to the providers array
  ],  bootstrap: [AppComponent]
})
export class AppModule { }

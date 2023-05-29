import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { UserBoardComponent } from './components/dashboard/user-board/user-board.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AgenceBoardComponent } from './components/dashboard/agence-board/agence-board.component';
import { ExpertBoardComponent } from './components/dashboard/expert-board/expert-board.component';
import { UserDashComponent } from './components/user-dash/user-dash.component';
import { AdminBoardComponent } from './components/dashboard/admin-board/admin-board.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings/settings.component';
import { AddexpertComponent } from './components/addexpert/addexpert.component';
import { ListAgenceComponent } from './components/Listes/list-agence/list-agence.component';
import { AgenceGuard } from './guards/agence.guard';
import { AssureGuard } from './guards/assure.guard';
import { ExpertGuard } from './guards/expert.guard';
import { ListExpertsComponent } from './components/Listes/list-experts/list-experts.component';
import { ListUsersComponent } from './components/Listes/list-users/list-users.component';
import { Error403Component } from './components/errors/error403/error403.component';
import { ForgotComponent } from './components/auth/forgot/forgot.component';
import { AdminGuard } from './guards/admin.guard';
import { ConstatComponent } from './components/constat/constat.component';
import { TestingComponent } from './testing/testing.component';
import { ListConstatComponent } from './components/Listes/list-constat/list-constat.component';
import { AddConstatComponent } from './components/add-constat/add-constat.component';
import { HistoryComponent } from './components/history/history.component';
import { VerifierConstatComponent } from './components/verifier-constat/verifier-constat.component';
import { SuiviConstatComponent } from './components/suivi-constat/suivi-constat.component';
import { ListComponent } from './components/Listes/list-constat/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { FirstPageComponent } from './components/home/first-page/first-page.component';
import { HelpComponent } from './components/home/help/help.component';
import { ContactComponent } from './components/contact/contact.component';
// import { Error403Component } from './components/errors/error403/error403.component';

const routes: Routes = [
  {path:'first',component:HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'login', component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'help', component:HelpComponent},
  {path:'user',component:UserBoardComponent,canActivate:[AssureGuard],
  children:[
    {path:'testprofile',component:ProfileComponent, outlet:'userBoard'},
    {path:'setting', component:SettingsComponent, outlet:'userBoard' },
    {path:'addConstat', component:AddConstatComponent, outlet:'userBoard' },
    {path:'history', component:HistoryComponent, outlet:'userBoard' },
    {path:'suivi', component:SuiviConstatComponent, outlet:'userBoard' },
  ]},
  {path:'agence', component:AgenceBoardComponent,canActivate:[AgenceGuard]
    ,children:[
      {path:'addExpert',component:AddexpertComponent,outlet:'agenceBoard'},
      {path:'profile',component:ProfileComponent,outlet:'agenceBoard'},
      {path:'listExpert', component:ListExpertsComponent,outlet:'agenceBoard'},
      {path:'listAssure',component:ListUsersComponent,outlet:'agenceBoard' },
      {path:'constat', component:ConstatComponent, outlet:'agenceBoard' },
      {path:'setting', component:SettingsComponent,outlet:'agenceBoard' },
      {path:'listConstat', component:ListConstatComponent,outlet:'agenceBoard',children:[
        {path:'verifConstat', component:VerifierConstatComponent,outlet:'agenceBoard' },
        {path:'', component:ListComponent, outlet:'agenceBoard'}

      ]},

    ]},
     


  {path:'admin',component:AdminBoardComponent,canActivate:[AdminGuard],children:[
    {path:'listAgence', component:ListAgenceComponent,outlet:'adminBoard'},
    {path:'adminProfile',component:ProfileComponent,outlet:'adminBoard'},
    {path:'setting', component:SettingsComponent, outlet:'adminBoard'},
    {path:'messages', component:ContactComponent, outlet:'adminBoard'}
  ]},

  {path:'forgot',component:ForgotComponent},
  {path:'setting', component:SettingsComponent, canActivate:[ExpertGuard]},

  {path:'expert',component:ExpertBoardComponent,canActivate:[ExpertGuard],children:[
    {path:'setting', component:SettingsComponent,outlet:'expertBoard'},
    {path:'expertProfile',component:ProfileComponent,outlet:'expertBoard'},
    {path:'constat', component:ConstatComponent, outlet:'expertBoard' },
    {path:'listConstat', component:ListConstatComponent,outlet:'expertBoard',children:[
      {path:'verifConstat', component:VerifierConstatComponent,outlet:'expertBoard' },
      {path:'', component:ListComponent, outlet:'expertBoard'}

    ]},

  ]},
  {path:'listexpert',component:ListExpertsComponent},
  {path:'401', component:Error403Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

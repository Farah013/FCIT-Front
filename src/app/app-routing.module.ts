import { ListeFormateurComponent } from './admin/liste-formateur/liste-formateur.component';
import { HomeComponent } from './admin/home/home.component';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsulteficheComponent } from './consultefiche/consultefiche.component';
import { EvaluationComponent } from './_evaluation/evaluation.component';
import { FormationsComponent } from './_mes formations router/formations.component';
import { MesformationsComponent } from './_mesformations/mesformations.component';
import { PageacceuilComponent } from './_pageacceuil/pageacceuil.component';
import { ProfileformateurComponent } from './_profileformateur/profileformateur.component';
import { NavadminComponent } from './admin/_navadmin/navadmin.component';
import { NavformateurComponent } from './navformateur/navformateur.component';
import { LoginComponent } from './login/login.component';
import { FormationplanifierComponent } from './admin/formationplanifier/formationplanifier.component';
import { FormationpasseeComponent } from './admin/formationpassee/formationpassee.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'admin',
    component: NavadminComponent,
    children: [
      { path: 'formationplanifier', component: FormationplanifierComponent },
      { path: 'home', component: HomeComponent },
      { path: 'formationpassee', component: FormationpasseeComponent },
      { path: 'formateurs', component: ListeFormateurComponent },
    ],
  },
  {
    path: 'formateur',
    component: NavformateurComponent,
    children: [
      { path: 'profile', component: ProfileformateurComponent },
      {
        path: 'mesformations',
        component: FormationsComponent,
        children: [
          { path: '', component: MesformationsComponent },
          { path: 'evaluation/:id', component: EvaluationComponent },
          { path: 'consulter/:id', component: ConsulteficheComponent },
        ],
      },
      { path: 'acceuil', component: PageacceuilComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingcomponents = [
  ProfileformateurComponent,
  MesformationsComponent,
  PageacceuilComponent,
  EvaluationComponent,
  FormationsComponent,
  ConsulteficheComponent,
  NavadminComponent,
  FormationplanifierComponent,
  FormationpasseeComponent,
];

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ParticipantEvalComponent } from './_participant-eval/participant-eval.component';
import { FormationComponent } from './_formation/formation.component';
import { ToggleComponent } from './toggle/toggle.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DoneComponent } from './done/done.component';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { NavformateurComponent } from './navformateur/navformateur.component';
import { LoginComponent } from './login/login.component';
import { FormationplanifierComponent } from './admin/formationplanifier/formationplanifier.component';
import { FormationadminComponent } from './admin/formationadmin/formationadmin.component';
import { AjouteruneformationComponent } from './admin/ajouteruneformation/ajouteruneformation.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HomeComponent } from './admin/home/home.component';
import { DetailsFormationComponent } from './admin/details-formation/details-formation.component';
import { ListeParticipantsComponent } from './admin/liste-participants/liste-participants.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ObjectifsPedagogiquesComponent } from './admin/objectifs-pedagogiques/objectifs-pedagogiques.component';
import { FicheFormationComponent } from './admin/fiche-formation/fiche-formation.component';
import { FicheEvalComponent } from './admin/fiche-eval/fiche-eval.component';
import { ListeFormateurComponent } from './admin/liste-formateur/liste-formateur.component';

@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    PopUpComponent,
    ParticipantEvalComponent,
    ToggleComponent,
    FormationComponent,
    DoneComponent,
    NavformateurComponent,
    LoginComponent,
    FormationplanifierComponent,
    FormationadminComponent,
    AjouteruneformationComponent,
    HomeComponent,
    DetailsFormationComponent,
    ListeParticipantsComponent,
    ObjectifsPedagogiquesComponent,
    FicheFormationComponent,
    FicheEvalComponent,
    ListeFormateurComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatButtonToggleModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    CommonModule,
    MatDatepickerModule,
  ],
  providers: [TestService],
  bootstrap: [AppComponent],
})
export class AppModule {}

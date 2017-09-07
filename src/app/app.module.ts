import { LanguageService } from './services/language/language.service';
import { StudyService } from './services/study/study.service';
import { ExperienceService } from './services/experience/experience.service';
import { ProjectService } from './services/project/project.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { SectionsComponent } from './components/sections/sections.component';
import { FooterComponent } from './components/footer/footer.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { DescriptionComponent } from './components/description/description.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FormComponent } from './components/form/form.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { HobbieComponent } from './components/hobbie/hobbie.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { LanguageComponent } from './components/language/language.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillComponent } from './components/skill/skill.component';
import { StudiesComponent } from './components/studies/studies.component';
import { StudieComponent } from './components/studie/studie.component';
import { MainComponent } from './components/main/main.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MainFeaturesComponent } from './components/main-features/main-features.component';
import { ListLabelsComponent } from './components/list-labels/list-labels.component';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavComponent,
    SectionsComponent,
    FooterComponent,
    AnalyticsComponent,
    AboutMeComponent,
    ContactComponent,
    DescriptionComponent,
    ExperienceComponent,
    FormComponent,
    ExperiencesComponent,
    HobbiesComponent,
    HobbieComponent,
    LanguagesComponent,
    LanguageComponent,
    ProjectsComponent,
    ProjectComponent,
    SkillsComponent,
    SkillComponent,
    StudiesComponent,
    StudieComponent,
    MainComponent,
    ContactsComponent,
    MainFeaturesComponent,
    ListLabelsComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProjectService, ExperienceService, StudyService, LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
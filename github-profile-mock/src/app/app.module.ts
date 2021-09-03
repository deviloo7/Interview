import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubHeaderComponent } from './github-profile/github-header/github-header.component';
import { GithubParentComponent } from './github-profile/github-parent/github-parent.component';
import { GithubContentComponent } from './github-profile/github-content/github-content.component';
import { GithubDetailsComponent } from './github-profile/github-content/github-details/github-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GithubOverviewComponent } from './github-profile/github-content/github-details/github-overview/github-overview.component';
import { GithubRepositoryComponent } from './github-profile/github-content/github-details/github-repository/github-repository.component';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [
    AppComponent,
    GithubHeaderComponent,
    GithubParentComponent,
    GithubContentComponent,
    GithubDetailsComponent,
    GithubOverviewComponent,
    GithubRepositoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

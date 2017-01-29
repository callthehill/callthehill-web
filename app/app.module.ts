import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { CallComponent } from './call/call.component';

const routes: Routes = [
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    StatsComponent,
    CallComponent,
    FeedComponent,
    ProfileComponent,
    UserComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

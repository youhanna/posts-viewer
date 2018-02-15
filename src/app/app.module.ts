import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { PostsListComponent } from './posts/components/posts-list/posts-list.component';
import { ErrorComponent } from './components/error/error.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './posts/effects/post';
import { PostService } from './services/post';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailsComponent } from './posts/components/post-details/post-details.component';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PostsListComponent,
    ErrorComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'posts', component: PostsListComponent},
      {path: 'post/:id', component: PostDetailsComponent},
      {path: 'error', component: ErrorComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'error', pathMatch: 'full'}
    ]),
    StoreModule.forRoot(reducers),
    HttpClientModule,
    EffectsModule.forRoot([PostEffects]),
    // StoreDevtoolsModule.instrumentStore()
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

 //all importantcomponents and packages
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CreatePostComponent } from './create-post/create-post.component';

import { environment } from '../environments/environment.prod';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { UserPostService } from './service/user-post.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { ChangelogComponent } from './changelog/changelog.component';
import { AdminComponent } from './admin/admin.component';

import "firebase/auth";
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SafePipe } from './pipe/safe';
import { CommentComponent } from './comment/comment.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    //declaring all components that are gonna be used for site
    AppComponent,
    TopBannerComponent,
    PostComponent,
    HomeComponent,
    VideoComponent,
    BlogComponent,
    ContactComponent,
    CreatePostComponent,
    ChangelogComponent,
    AdminComponent,
    SearchBarComponent,
    SafePipe,
    CommentComponent,

  ],
  imports: [
    //declaring modules
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, "angular-auth-firebase"),
    AngularFireDatabaseModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    RouterModule,
  ],

  providers: [UserPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

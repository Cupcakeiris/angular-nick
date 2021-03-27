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


@NgModule({
  declarations: [
    AppComponent,
    TopBannerComponent,
    PostComponent,
    HomeComponent,
    VideoComponent,
    BlogComponent,
    ContactComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [UserPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

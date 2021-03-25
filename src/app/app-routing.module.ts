import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'post', component: PostComponent},
  { path:'video', component: VideoComponent},
  { path:'blog', component: BlogComponent},
  { path:'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

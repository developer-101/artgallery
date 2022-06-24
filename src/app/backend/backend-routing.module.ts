import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { BackendComponent } from './backend.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PicturesComponent } from './pictures/pictures.component';

const routes: Routes = [
  {
    path: '', component: BackendComponent, children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'pictures', component: PicturesComponent },
      { path: 'galleries', component: GalleriesComponent },
      { path: 'author', component: AuthorComponent },
      { path: 'auth', component: AuthorComponent },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendRoutingModule { }

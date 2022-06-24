import { NgModule } from '@angular/core';
import { BackendRoutingModule } from './backend-routing.module';
import { PicturesComponent } from './pictures/pictures.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { AuthorComponent } from './author/author.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { BackendComponent } from './backend.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { PictureComponent } from './picture/picture.component';
import { PictureService } from './services/picture.service';

@NgModule({
  declarations: [
    PicturesComponent,
    GalleriesComponent,
    AuthorComponent,
    NotFoundComponent,
    BackendComponent,
    HomeComponent,
    AuthComponent,
    PictureComponent
  ],
  imports: [
    BackendRoutingModule,
    SharedModule,
  ],
  providers: [
    PictureService
  ]
})
export class BackendModule { }

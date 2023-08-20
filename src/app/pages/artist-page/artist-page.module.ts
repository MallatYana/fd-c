import { NgModule } from '@angular/core';

import { ArtistPageComponent } from './artist-page/artist-page.component';
import { ArtistPageRoutingModule } from './artist-page-routing.module';

// maybe to add here an a bootstrap like in the app module

@NgModule({
  declarations: [ ArtistPageComponent ],
  exports: [ ArtistPageComponent ],
  imports: [
    ArtistPageRoutingModule
  ]
})
export class ArtistPageModule { }

import { NgModule } from '@angular/core';

import { MainPageComponent } from "./main-page/main-page.component";
import { SmallSearchFieldModule } from "../../shared/elements/small-search-field/small-search-field.module";
import {GalleryCardModule} from "../../shared/elements/gallery-card/gallery-card.module";

@NgModule({
  declarations: [ MainPageComponent ],
  exports: [ MainPageComponent ],
  imports: [
    SmallSearchFieldModule,
    GalleryCardModule
  ]
})
export class MainPageModule { }

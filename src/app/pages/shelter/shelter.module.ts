import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShelterPageRoutingModule } from './shelter-routing.module';

import { ShelterPage } from './shelter.page';
import { ShelterMaintenanceComponent } from 'src/app/components/shelter-maintenance/shelter-maintenance.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ShelterNewPostComponent } from 'src/app/components/shelter-new-post/shelter-new-post.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShelterPageRoutingModule
  ],
  declarations: [ShelterPage, HeaderComponent, ShelterMaintenanceComponent, ShelterNewPostComponent]
})
export class ShelterPageModule { }

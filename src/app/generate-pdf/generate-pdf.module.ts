import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneratePdfPageRoutingModule } from './generate-pdf-routing.module';

import { GeneratePdfPage } from './generate-pdf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneratePdfPageRoutingModule
  ],
  declarations: [GeneratePdfPage]
})
export class GeneratePdfPageModule {}

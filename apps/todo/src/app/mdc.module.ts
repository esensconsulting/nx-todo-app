import { NgModule } from '@angular/core';

import {
  MdcCardModule,
  MdcCheckboxModule,
  MdcChipsModule,
  MdcDialogModule,
  MdcElevationModule,
  MdcFabModule,
  MdcIconButtonModule,
  MdcIconModule,
  MdcListModule,
  MdcMenuModule,
  MdcTextFieldModule,
  MdcTypographyModule
} from '@angular-mdc/web';

@NgModule({
  exports: [
    MdcListModule,
    MdcIconModule,
    MdcCheckboxModule,
    MdcCardModule,
    MdcTypographyModule,
    MdcFabModule,
    MdcElevationModule,
    MdcDialogModule,
    MdcTextFieldModule,
    MdcIconButtonModule,
    MdcChipsModule,
    MdcMenuModule
  ]
})
export class MdcModule {}

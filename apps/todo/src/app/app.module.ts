import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MdcModule } from './mdc.module';
import { TodosModule } from './modules/todos/todos.module';
import { DeviceDetectorModule } from 'ngx-device-detector';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MdcModule, TodosModule, DeviceDetectorModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

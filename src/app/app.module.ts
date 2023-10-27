import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestContentComponent } from './shared/components/test-content/test-content.component';
import { AuthComponentComponent } from './shared/components/auth/auth-component/auth-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestContentComponent,
    AuthComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

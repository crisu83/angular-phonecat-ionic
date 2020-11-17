import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, UpgradeModule, HttpClientModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class Ng2AppModule {
  constructor(public upgrade: UpgradeModule) {}
}

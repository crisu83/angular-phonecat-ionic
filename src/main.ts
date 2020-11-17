import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Ng2AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Ng1AppModule } from './app/app.module.ajs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(Ng2AppModule)
  .then((ref) => {
    ref.instance.upgrade.bootstrap(document.documentElement, [Ng1AppModule.name]);
  })
  .catch((err) => console.error(err));

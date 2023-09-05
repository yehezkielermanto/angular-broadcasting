import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;
window.Echo = new Echo({
  broadcaster: 'pusher',
  key: environment.PUSHER_APP_KEY,
  cluster: environment.PUSHER_APP_CLUSTER ?? 'mt1',
  wsHost: environment.PUSHER_HOST ? environment.PUSHER_HOST : `ws-${environment.PUSHER_APP_CLUSTER}.pusher.com`,
  wsPort: environment.PUSHER_PORT ?? 80,
  wssPort: environment.PUSHER_PORT ?? 443,
  forceTLS: (environment.PUSHER_SCHEME ?? 'https') === 'https',
  enabledTransports: ['ws', 'wss'],
  authEndpoint: `${environment.PUSHER_SCHEME}://${environment.PUSHER_HOST}:8000/broadcasting/auth`,
  auth: {
    headers: {
      Authorization: ''
    }
  }
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

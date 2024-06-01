import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RepeatOpenCloseButtonComponent } from './repeat-open-close-button/repeat-open-close-button.component';
import { ConnectDisconnectEventComponent } from './connect-disconnect-event/connect-disconnect-event.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RepeatOpenCloseButtonComponent, ConnectDisconnectEventComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pixelbudtest';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-connect-disconnect-event',
  standalone: true,
  imports: [],
  templateUrl: './connect-disconnect-event.component.html',
  styleUrl: './connect-disconnect-event.component.css'
})
export class ConnectDisconnectEventComponent {

  async connectAndDisconnect() {
    const uuids = ['25e97ff7-24ce-4c4c-8951-f764a708f7b5', '3a046f6d-24d2-7655-6534-0d7ecb759709'];
    let port;

    try {
      // https://g.co/gemini/share/b581c3831922
      port = await (navigator as any).serial.requestPort({
        allowedBluetoothServiceClassIds: uuids,
        filters:[{bluetoothServiceClassId:uuids[0]}, {bluetoothServiceClassId:uuids[1]}]
      });
    } catch (e) {
      console.error('Error requesting port:', e);
      return; // Handle the error appropriately (e.g., show a message to the user)
    }
    port.onconnect = () => {
      console.log('[DEBUG] connect');
    };
    port.ondisconnect = () => {
      console.log('[DEBUG] disconnect');
    };
  }
}

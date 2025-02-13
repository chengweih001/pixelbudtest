import { Component } from '@angular/core';

@Component({
  selector: 'app-repeat-open-close-button',
  standalone: true,
  imports: [],
  templateUrl: './repeat-open-close-button.component.html',
  styleUrl: './repeat-open-close-button.component.css'
})
export class RepeatOpenCloseButtonComponent {

  async repeatOpenClose() {
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

    let count = 0;
    while (true) {
      try {
        console.log('[DEBUG] Attempt to open port');
        await port.open({ baudRate: 115200 });
      } catch (e) {
        console.error(e);
      }

      while (port.readable) {
        const reader = port.readable.getReader();
        try {
          while (true) {
            const { value, done } = await reader.read();
            console.log('[DEBUG] Read value:', value.length);
            if (done) {
              console.log('[DEBUG] Read done');
              break;
            }
          }
        } catch (error) {
          console.error('[DEBUG] Error:', error);
          await port.close();
          console.log('[DEBUG] Closed');
        } finally {
          reader.releaseLock();
        }
      }
      console.log(`[DEBUG] Finished count ${count}`);
      count++;
    }
  }
}

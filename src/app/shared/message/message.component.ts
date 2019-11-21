import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
  <div *ngIf="temErro()" class="ui-messages ui-messages-error">
    {{ text }}
  </div>
  `,
  styles: [`
  .ui-messages.ui-messages-error {
    background-color: #ff0000;
    color: #ffffff;
    border-radius: 4px;
    padding: 3px;
    margin: 2px 0;
    font-weight: bold;
}`]
})
export class MessageComponent {

  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;

  temErro(): boolean {
    return this != null && this.control != null && this.control.hasError(this.error) && this.control.dirty;
  }


}

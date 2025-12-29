import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopnavComponent } from './components/ui/topnav-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopnavComponent],
  template: `
    <div class="min-h-screen bg-gray-800">
      <app-topnav ngSkipHydration>
        <div main><router-outlet /></div>
      </app-topnav>
    </div>
  `,
})
export class App {}

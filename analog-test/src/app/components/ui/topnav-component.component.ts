import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [CommonModule, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonButtons],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="min-w-screen bg-amber-800" ngSkipHidration>
      <ion-menu contentId="main-content">
        <ion-header>
          <ion-toolbar>
            <ion-title>Menu Content</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">This is the menu content.</ion-content>
      </ion-menu>
      <div class="ion-page" id="main-content">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-menu-button></ion-menu-button>
            </ion-buttons>
            <ion-title>Menu</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          Tap the button in the toolbar to open the menu.
        </ion-content>
      </div>
    </header>
  `,
})
export class TopnavComponent implements OnInit {
  // private readonly service = inject(Service);

  constructor() {}

  ngOnInit(): void {
    // Initialization logic here
  }
}

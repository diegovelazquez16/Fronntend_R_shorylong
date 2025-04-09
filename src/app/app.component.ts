import { Component, ViewChild } from '@angular/core';
import { CardGenderCountComponent } from './persona/counts/counts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto_api';

  @ViewChild(CardGenderCountComponent) cardGenderCountComponent!: CardGenderCountComponent;

  actualizarDatos() {
    if (this.cardGenderCountComponent) {
      this.cardGenderCountComponent.loadGenderCount(); 
    }
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-gender-count',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.css']
})
export class CardGenderCountComponent implements OnInit, OnDestroy {
  hombreCount: number = 0;
  mujerCount: number = 0;
  totalCount: number = 0;
  private subscription: Subscription = new Subscription();

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.loadGenderCount();

    this.subscription = this.personaService.contarGenerosLongPolling().subscribe(
      data => this.updateCounts(data),
      error => console.error('Error en long polling:', error)
    );
  }


  loadGenderCount(): void {
    this.personaService.contarGeneros().subscribe(
      (data: any) => {
        this.updateCounts(data);
      },
      (error) => {
        console.error('Error al obtener conteo de géneros:', error);
      }
    );
  }

  private updateCounts(data: any): void {
    this.hombreCount = data.Hombre || 0;
    this.mujerCount = data.Mujer || 0;
    this.totalCount = this.hombreCount + this.mujerCount;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }




}

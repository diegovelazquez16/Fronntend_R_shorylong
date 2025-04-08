import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonasComponent } from './personas/personas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardGenderCountComponent } from './counts/counts.component';


@NgModule({
  declarations: [PersonasComponent,CardGenderCountComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [PersonasComponent , CardGenderCountComponent]
})
export class PersonaModule { }

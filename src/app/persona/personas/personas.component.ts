import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})

export class PersonasComponent {
  @Output() personaCreada = new EventEmitter<any>();
  @Output() errorCreacion = new EventEmitter<any>();

  personaForm: FormGroup;
  generos = ['Mujer', 'Hombre'];
  sexos = ['Femenino', 'Masculino'];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private personaService: PersonaService
  ) {
    this.personaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      edad: ['', [Validators.required, Validators.min(0), Validators.max(120)]],
      sexo: ['Femenino', Validators.required],
      genero: ['Mujer', Validators.required]
    });
  }

  submitForm(): void {
    if (this.personaForm.valid && !this.loading) {
      this.loading = true;

      this.personaService.crearPersona(this.personaForm.value).subscribe({
        next: (response) => {
          this.loading = false;
          this.personaForm.reset({
            sexo: 'Femenino',
            genero: 'Mujer'
          });
          this.personaCreada.emit(response);
        },
        error: (error) => {
          this.loading = false;
          this.errorCreacion.emit(error);
          console.error('Error al crear persona:', error);
        }
      });
    }
  }
}

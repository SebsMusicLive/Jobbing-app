import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../hero/hero';

@Component({
  selector: 'app-plan-trimestral-cuestionario',
  standalone: true,
  imports: [CommonModule, FormsModule, Hero],
  templateUrl: './trimestral-cuestionario.html', // Usamos el HTML base
})
export class TrimestralCuestionarioComponent {

  respuestas: { [key: number]: any } = {};

  questions = [
    { id: 1, text: '¿Qué significa crear una campaña inclusiva?', type: 'textarea' },
    { id: 2, text: 'Completa: Una campaña inclusiva promueve el _______ y la participación.', type: 'fill-in', model: '' },
    { id: 3, text: '¿Qué herramienta digital usaste para diseñar tu campaña?', type: 'text' },
    { id: 4, text: 'Menciona una frase o mensaje inclusivo que hayas creado.', type: 'text' },
    { id: 5, text: 'Verdadero o Falso: La inclusión se logra solo con imágenes llamativas.', type: 'radio', options: ['Verdadero', 'Falso'], model: '' },
    { id: 6, text: '¿Por qué es importante el trabajo en equipo para crear una campaña?', type: 'textarea' },
    { id: 7, text: 'Describe el papel de la voz en la comunicación inclusiva.', type: 'textarea' },
    { id: 8, text: 'Selecciona la opción correcta: El liderazgo comunicativo implica...', type: 'radio', options: ['imponer ideas', 'escuchar activamente', 'hablar más fuerte', 'evitar opiniones'], model: '' },
    { id: 9, text: '¿Qué elemento no puede faltar en un mensaje inclusivo?', type: 'text' },
    { id: 10, text: 'Completa: El respeto y la _______ son bases de la inclusión laboral.', type: 'fill-in', model: '' },
    { id: 11, text: '¿Qué emoción te generó participar en una campaña grupal?', type: 'text' },
    { id: 12, text: 'Verdadero o Falso: El tono y ritmo vocal pueden reforzar el mensaje inclusivo.', type: 'radio', options: ['Verdadero', 'Falso'], model: '' },
    { id: 13, text: 'Menciona una estrategia para incluir a todos los compañeros en una actividad digital.', type: 'textarea' },
    { id: 14, text: '¿Qué aprendizaje personal te dejó este plan trimestral?', type: 'textarea' },
    { id: 15, text: 'Describe brevemente cómo aplicarías la inclusión en otro entorno laboral.', type: 'textarea' }
  ];

  get progressPercentage(): number { /* ... */ return 0; }
  submitTest() { /* ... */ }
  resetTest() { this.respuestas = {}; }
}

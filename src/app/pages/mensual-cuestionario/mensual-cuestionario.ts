import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../hero/hero';

@Component({
  selector: 'app-plan-mensual-cuestionario',
  standalone: true,
  imports: [CommonModule, FormsModule, Hero],
  templateUrl: './mensual-cuestionario.html', // Usamos el HTML base
})
export class MensualCuestionarioComponent {

  respuestas: { [key: number]: any } = {};

  questions = [
    { id: 1, text: '¿Qué emoción reconoces con mayor facilidad al comunicarte?', type: 'text' },
    { id: 2, text: 'Completa: La _______ permite comprender mejor lo que otros sienten.', type: 'fill-in', model: '' },
    { id: 3, text: '¿Por qué es importante usar gestos al expresar una emoción?', type: 'textarea' },
    { id: 4, text: 'Menciona dos emociones básicas que hayas trabajado durante el plan.', type: 'text' },
    { id: 5, text: 'Verdadero o Falso: Todas las emociones se expresan con el mismo tono de voz.', type: 'radio', options: ['Verdadero', 'Falso'], model: '' },
    { id: 6, text: '¿Qué herramienta digital se usó para crear historias colaborativas?', type: 'text' },
    { id: 7, text: '¿Cómo puedes demostrar empatía en una conversación digital?', type: 'textarea' },
    { id: 8, text: 'Selecciona la opción correcta: La prosodia está relacionada con...', type: 'radio', options: ['la velocidad', 'la entonación', 'el volumen', 'la respiración'], model: '' },
    { id: 9, text: 'Describe una actividad donde lograste expresar una emoción correctamente.', type: 'textarea' },
    { id: 10, text: '¿Qué recurso te ayudó a reconocer las emociones en otros?', type: 'text' },
    { id: 11, text: 'Completa: El gesto facial es una forma de _______ no verbal.', type: 'fill-in', model: '' },
    { id: 12, text: 'Verdadero o Falso: La expresión emocional no influye en la comunicación efectiva.', type: 'radio', options: ['Verdadero', 'Falso'], model: '' },
    { id: 13, text: 'Menciona un aprendizaje que obtuviste al contar historias con emoción.', type: 'textarea' },
    { id: 14, text: '¿Por qué es importante escuchar activamente al comunicarse?', type: 'textarea' },
    { id: 15, text: 'Explica brevemente qué emoción te resulta más fácil o difícil expresar.', type: 'textarea' }
  ];

  get progressPercentage(): number { /* ... */ return 0; }
  submitTest() { /* ... */ }
  resetTest() { this.respuestas = {}; }
}

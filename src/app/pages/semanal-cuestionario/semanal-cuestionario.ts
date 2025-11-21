import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../hero/hero';

@Component({
  selector: 'app-plan-semanal-cuestionario',
  standalone: true,
  imports: [CommonModule, FormsModule, Hero],
  templateUrl: './semanal-cuestionario.html', // Usamos el HTML base del cuestionario
})
export class SemanalCuestionarioComponent {

  respuestas: { [key: number]: any } = {};

  questions = [
    { id: 1, text: '¿Qué significa reconocer tu voz como herramienta de comunicación?', type: 'textarea' },
    { id: 2, text: '¿Por qué es importante mantener una postura adecuada al hablar?', type: 'textarea' },
    { id: 3, text: 'Menciona dos elementos que componen una buena presentación personal.', type: 'textarea' },
    { id: 4, text: '¿Qué técnica de respiración se utiliza para mejorar la proyección de la voz?', type: 'textarea' },
    { id: 5, text: 'Verdadero o Falso: La voz no influye en la confianza al comunicarse.', type: 'radio', options: ['Verdadero', 'Falso'], model: '' },
    { id: 6, text: 'Describe un ejercicio para practicar la modulación vocal.', type: 'textarea' },
    { id: 7, text: '¿Qué herramienta digital se puede usar para grabar tu autopresentación?', type: 'text' },
    { id: 8, text: 'Completa: La respiración _______ ayuda a controlar el tono y ritmo de la voz.', type: 'fill-in', model: '' },
    { id: 9, text: '¿Qué emoción sientes al escucharte en una grabación de tu voz?', type: 'text' },
    { id: 10, text: 'Selecciona la opción correcta: El contacto visual transmite...', type: 'radio', options: ['nerviosismo', 'seguridad', 'desinterés', 'duda'], model: '' },
    { id: 11, text: '¿Qué recurso digital permite crear un mapa mental sobre quién eres?', type: 'text' },
    { id: 12, text: 'Verdadero o Falso: La claridad al hablar no depende del ritmo ni de la articulación.', type: 'radio', options: ['Verdadero', 'Falso'], model: '' },
    { id: 13, text: 'Escribe una frase corta que refleje tu identidad comunicativa.', type: 'textarea' },
    { id: 14, text: '¿Por qué es importante reconocer la identidad vocal propia?', type: 'textarea' },
    { id: 15, text: 'Menciona una habilidad que fortaleciste durante este plan.', type: 'textarea' }
  ];

  get progressPercentage(): number {
    const answered = this.questions.filter(q => {
      const answer = this.respuestas[q.id];
      return answer && String(answer).trim().length > 0;
    }).length;

    return Math.round((answered / this.questions.length) * 100);
  }

  submitTest() { /* ... */ }
  resetTest() { this.respuestas = {}; }
}

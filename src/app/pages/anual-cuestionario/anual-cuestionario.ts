import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../hero/hero';

@Component({
  selector: 'app-plan-anual-cuestionario',
  standalone: true,
  imports: [CommonModule, FormsModule, Hero],
  templateUrl: './anual-cuestionario.html',
})
export class AnualCuestionarioComponent {

  // Array para almacenar las respuestas del usuario
  respuestas: { [key: number]: any } = {};

  // Datos del cuestionario basados en el PDF del Plan Anual
  questions = [
    { id: 1, text: '¿Qué cambios notaste en tu forma de comunicarte durante el año?', type: 'textarea' },
    { id: 2, text: 'Completa: La identidad comunicativa refleja quién soy y cómo _______.', type: 'fill-in', model: '' },
    { id: 3, text: '¿Qué habilidades digitales fortaleciste este año?', type: 'textarea' },
    { id: 4, text: 'Menciona una situación donde aplicaste comunicación empática.', type: 'textarea' },
    { id: 5, text: 'Verdadero o Falso: La autonomía comunicativa no requiere práctica constante.', type: 'radio', options: ['Verdadero', 'Falso'], model: '' },
    { id: 6, text: '¿Por qué es importante mantener la estabilidad vocal?', type: 'textarea' },
    { id: 7, text: 'Describe un logro personal relacionado con tu crecimiento comunicativo.', type: 'textarea' },
    { id: 8, text: 'Selecciona la opción correcta: Una entrevista simulada sirve para...', type: 'radio', options: ['practicar respuestas', 'diseñar campañas', 'editar videos', 'medir la respiración'], model: '' },
    { id: 9, text: '¿Qué herramienta digital usaste para crear tu portafolio profesional?', type: 'text' },
    { id: 10, text: 'Completa: La empatía permite establecer _______ laborales saludables.', type: 'fill-in', model: '' },
    { id: 11, text: 'Verdadero o Falso: La lectura comprensiva ayuda a mejorar la expresión oral.', type: 'radio', options: ['Verdadero', 'Falso'], model: '' },
    { id: 12, text: 'Menciona un reto que superaste gracias a la práctica comunicativa.', type: 'textarea' },
    { id: 13, text: '¿Qué indicador refleja tu evolución anual?', type: 'textarea' },
    { id: 14, text: 'Explica cómo aplicarás tus habilidades comunicativas en el ámbito laboral.', type: 'textarea' },
    { id: 15, text: '¿Por qué es importante evaluar periódicamente tus avances?', type: 'textarea' }
  ];

  // Visualización del progreso (solo visual)
  get progressPercentage(): number {
    // Cuenta cuántas preguntas tienen una respuesta no vacía
    const answered = this.questions.filter(q => {
      const answer = this.respuestas[q.id];
      return answer && String(answer).trim().length > 0;
    }).length;

    return Math.round((answered / this.questions.length) * 100);
  }

  submitTest() {
    const completion = this.progressPercentage;
    if (completion < 100) {
      alert(`Aún te falta responder ${100 - completion}% del cuestionario. Complétalo antes de enviarlo.`);
    } else {
      alert('Cuestionario enviado correctamente. ¡Gracias por participar!');
      // Aquí iría la lógica de envío a un servicio/backend.
    }
  }

  resetTest() {
    this.respuestas = {};
  }
}

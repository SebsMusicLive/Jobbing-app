import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../hero/hero';

@Component({
  selector: 'app-institucional-cuestionario',
  standalone: true,
  imports: [CommonModule, FormsModule, Hero],
  templateUrl: './institucional-cuestionario.html',
})
export class InstitucionalCuestionarioComponent {

  // Array para almacenar las respuestas del usuario
  respuestas: { [key: number]: any } = {};

  // Datos del cuestionario basados en el PDF
  questions = [
    { id: 1, text: '¿Qué significa comunicar para incluir dentro de JOBING?', type: 'textarea' },
    { id: 2, text: 'Completa: La atención inclusiva se basa en la ______ y el respeto.', type: 'fill-in', model: '' },
    { id: 3, text: '¿Por qué es importante el trabajo en equipo en el entorno institucional?', type: 'textarea' },
    { id: 4, text: 'Menciona un valor esencial en la comunicación institucional.', type: 'text' },
    { id: 5, text: 'Verdadero o Falso: Escuchar activamente mejora la atención al cliente.', type: 'radio', options: ['Verdadero', 'Falso'], model: '' },
    { id: 6, text: '¿Qué herramienta digital se usó para realizar simulaciones grupales?', type: 'text' },
    { id: 7, text: 'Describe cómo aplicaste la empatía durante una simulación de atención.', type: 'textarea' },
    { id: 8, text: 'Selecciona la opción correcta: La retroalimentación 360° consiste en...', type: 'radio', options: ['Evaluar solo al líder', 'Escuchar a todos los integrantes', 'Hablar sin escuchar', 'Evitar críticas'], model: '' },
    { id: 9, text: '¿Qué actitud demuestra un buen asesor en la atención al cliente?', type: 'text' },
    { id: 10, text: 'Completa: La inclusión institucional promueve la ______ de todos los participantes.', type: 'fill-in', model: '' },
    { id: 11, text: 'Verdadero o Falso: En la comunicación institucional, solo importa hablar bien.', type: 'radio', options: ['Verdadero', 'Falso'], model: '' },
    { id: 12, text: 'Menciona una estrategia para fomentar el respeto en tu grupo.', type: 'textarea' },
    { id: 13, text: '¿Qué aprendizaje obtuviste al trabajar colectivamente?', type: 'textarea' },
    { id: 14, text: 'Describe un ejemplo de liderazgo positivo observado en el grupo.', type: 'textarea' },
    { id: 15, text: '¿Cómo aplicarías la comunicación inclusiva en otro contexto laboral?', type: 'textarea' }
  ];

  // Visualización del progreso (solo visual)
  get progressPercentage(): number {
    const answered = Object.keys(this.respuestas).filter(key => this.respuestas[+key] && this.respuestas[+key].length > 0).length;
    return Math.round((answered / this.questions.length) * 100);
  }

  submitTest() {
    // Lógica para enviar el cuestionario (aquí solo mostramos una alerta)
    const completion = this.progressPercentage;
    if (completion < 100) {
      alert(`Aún te falta responder ${100 - completion}% del cuestionario. Complétalo antes de enviarlo.`);
    } else {
      alert('Cuestionario enviado correctamente. ¡Gracias por participar!');
      // Aquí iría la lógica de envío a un servicio/backend.
    }
  }
}

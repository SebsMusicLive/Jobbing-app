// src/app/pages/cuestionarios/cuestionarios.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario para el Two-Way Binding (ej. textarea)
import { RouterModule } from '@angular/router';
import { Hero } from '../../hero/hero';

@Component({
  selector: 'app-cuestionarios',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, Hero],
  templateUrl: './cuestionarios.html',
})
export class CuestionariosComponent implements OnInit {

  // Estructura de datos basada en los planes y sus indicadores
  plans = [
    {
      id: 1,
      title: 'Plan Semanal: Mi Voz, Mi Historia',
      shortDescription: 'Evalúa la claridad en la expresión oral y el reconocimiento de la identidad comunicativa. [cite: 90]',
      progress: 0,
      updated: '—',
      result: '',
      notes: '',
      checkboxes: [
        { label: 'Articulé con claridad y precisión', checked: false },
        { label: 'Mantuve ritmo respiratorio controlado', checked: false },
        { label: 'Utilicé un tono de voz estable', checked: false },
        { label: 'Mantuve contacto visual durante la grabación', checked: false },
        { label: 'Me sentí seguro/a y expresivo/a', checked: false }
      ]
    },
    {
      id: 2,
      title: 'Plan Mensual: Historias con Emoción Virtual',
      shortDescription: 'Evalúa la expresión emocional, la prosodia y la comprensión auditiva. [cite: 120]',
      progress: 0,
      updated: '—',
      result: '',
      notes: '',
      checkboxes: [
        { label: 'Identifico emociones en imágenes', checked: false },
        { label: 'Uso entonación acorde a la emoción', checked: false },
        { label: 'Mantengo ritmo vocal constante', checked: false },
        { label: 'Participo activamente en narraciones', checked: false },
        { label: 'Expreso empatía al comunicar', checked: false }
      ]
    },
    {
      id: 3,
      title: 'Plan Trimestral: Mi Campaña Inclusiva',
      shortDescription: 'Evalúa la creación de mensajes inclusivos, fluidez verbal y trabajo en equipo. [cite: 150]',
      progress: 0,
      updated: '—',
      result: '',
      notes: '',
      checkboxes: [
        { label: 'Participé activamente en la creación del mensaje', checked: false },
        { label: 'Apliqué lenguaje inclusivo', checked: false },
        { label: 'Utilicé tono y ritmo adecuados', checked: false },
        { label: 'Coordiné con mi grupo de forma efectiva', checked: false },
        { label: 'Respeté turnos y opiniones', checked: false }
      ]
    },
    {
      id: 4,
      title: 'Plan Anual: Mi Crecimiento Profesional',
      shortDescription: 'Evalúa la autonomía comunicativa, la estabilidad vocal y la proyección profesional. [cite: 180]',
      progress: 0,
      updated: '—',
      result: '',
      notes: '',
      checkboxes: [
        { label: 'Mantengo estabilidad vocal y respiratoria', checked: false },
        { label: 'Expreso ideas con coherencia y seguridad', checked: false },
        { label: 'Me comunico con empatía y respeto', checked: false },
        { label: 'Desarrollé mi portafolio digital profesional', checked: false },
        { label: 'Participé en simulaciones laborales', checked: false }
      ]
    },
    {
      id: 5,
      title: 'Plan Institucional: Comunicar para Incluir',
      shortDescription: 'Evalúa el desempeño comunicativo y colaborativo en contextos grupales y atención al cliente. [cite: 211]',
      progress: 0,
      updated: '—',
      notes: '',
      result: '',
      checkboxes: [
        { label: 'Participé en todas las actividades grupales', checked: false },
        { label: 'Apliqué estrategias comunicativas funcionales', checked: false },
        { label: 'Mostré empatía y colaboración', checked: false },
        { label: 'Contribuí a la campaña institucional', checked: false },
        { label: 'Reflexioné sobre la importancia de la inclusión', checked: false }
      ]
    }
  ];

  ngOnInit(): void {
    this.plans.forEach(plan => this.computePercent(plan));
  }

  // FUNCIÓN CORREGIDA: Calcula el porcentaje basado en la proporción de Checkboxes
  computePercent(plan: any): void {
    // 1. Contar indicadores completados
    const checkedCount = plan.checkboxes.filter((c: any) => c.checked).length;
    const totalChecks = plan.checkboxes.length; // Siempre 5

    // 2. Calcular la base de la puntuación (0% a 100%)
    // Si tienes 3 de 5 checks, la base es (3/5) * 100 = 60%
    let scoreFromChecks = (checkedCount / totalChecks) * 100;

    // 3. Definir el Multiplicador (Ajuste cualitativo del Radio Button)
    let multiplier = 1.0; // Default: Puntuación es igual a los checks

    if (plan.result === 'parcial') {
      // Si el instructor se autoevalúa como "parcial", penalizamos el 20% del score de checks.
      multiplier = 0.8;
    } else if (plan.result === 'no') {
      // Si la autoevaluación es "no", penalizamos el 50%.
      multiplier = 0.5;
    }

    // 4. Aplicar el Multiplicador
    let finalPercent = Math.round(scoreFromChecks * multiplier);

    // 5. Aplicar un mínimo de 1% si hay notas o resultado marcado (para evitar 0% si solo hay texto)
    if (finalPercent === 0 && (plan.notes || plan.result)) {
        finalPercent = 1;
    }

    plan.progress = finalPercent;
  }

  saveEvidence(plan: any): void {
    // ... [código de saveEvidence existente] ...
    plan.updated = new Date().toLocaleString();
    alert(`Evidencia para ${plan.title} guardada. Progreso: ${plan.progress}%`);
  }

  resetForm(plan: any): void {
    // ... [código de resetForm existente] ...
    plan.result = '';
    plan.notes = '';
    plan.updated = '—';
    plan.checkboxes.forEach((c: any) => c.checked = false);
    this.computePercent(plan);
  }
}

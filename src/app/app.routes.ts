import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';
import { Semanal } from './pages/plans/semanal/semanal';
import { Mensual } from './pages/plans/mensual/mensual';
import { Trimestral } from './pages/plans/trimestral/trimestral';
import { Anual } from './pages/plans/anual/anual';
import { Institucional } from './pages/plans/institucional/institucional';
import { CuestionariosComponent } from './pages/cuestionarios/cuestionarios';
import { InstitucionalCuestionarioComponent } from './pages/institucional-cuestionario/institucional-cuestionario';
import { AnualCuestionarioComponent } from './pages/anual-cuestionario/anual-cuestionario';
import { SemanalCuestionarioComponent } from './pages/semanal-cuestionario/semanal-cuestionario';
import { TrimestralCuestionarioComponent } from './pages/trimestral-cuestionario/trimestral-cuestionario';
import { MensualCuestionarioComponent } from './pages/mensual-cuestionario/mensual-cuestionario';
import { Pagos } from './pages/pagos/pagos';
// Asegúrate de que esta ruta sea real

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'quienes-somos', component: About },
    { path: 'seguimiento', component: CuestionariosComponent },
    { path: 'cuestionario/institucional', component: InstitucionalCuestionarioComponent },
    { path: 'cuestionario/anual', component: AnualCuestionarioComponent },
    { path: 'cuestionario/semanal', component: SemanalCuestionarioComponent },
    { path: 'cuestionario/trimestral', component: TrimestralCuestionarioComponent },
    { path: 'cuestionario/mensual', component: MensualCuestionarioComponent },



  // Ruta padre para Servicios con rutas hijas
  {
    path: 'servicios',
    component: Services, // Este componente podría ser una página de aterrizaje general de servicios, o simplemente un placeholder para el router-outlet
    children: [
      { path: 'semanal', component: Semanal },
      { path: 'mensual', component: Mensual },
      { path: 'trimestral', component: Trimestral },
      { path: 'anual', component: Anual },
      { path: 'institucional', component: Institucional },
    ]
  },
  { path: 'contacto', component: Contact },
  { path: 'pagos', component: Pagos },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

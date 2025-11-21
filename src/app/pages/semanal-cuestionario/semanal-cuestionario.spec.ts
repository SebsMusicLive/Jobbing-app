import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanalCuestionario } from './semanal-cuestionario';

describe('SemanalCuestionario', () => {
  let component: SemanalCuestionario;
  let fixture: ComponentFixture<SemanalCuestionario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemanalCuestionario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemanalCuestionario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

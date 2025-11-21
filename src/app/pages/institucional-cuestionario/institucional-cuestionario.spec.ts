import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionalCuestionario } from './institucional-cuestionario';

describe('InstitucionalCuestionario', () => {
  let component: InstitucionalCuestionario;
  let fixture: ComponentFixture<InstitucionalCuestionario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitucionalCuestionario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitucionalCuestionario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

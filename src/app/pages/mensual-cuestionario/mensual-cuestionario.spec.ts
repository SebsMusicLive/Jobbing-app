import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensualCuestionarioComponent } from './mensual-cuestionario';

describe('MensualCuestionario', () => {
  let component: MensualCuestionarioComponent;
  let fixture: ComponentFixture<MensualCuestionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensualCuestionarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensualCuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

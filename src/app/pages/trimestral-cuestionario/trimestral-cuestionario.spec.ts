import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimestralCuestionario } from './trimestral-cuestionario';

describe('TrimestralCuestionario', () => {
  let component: TrimestralCuestionario;
  let fixture: ComponentFixture<TrimestralCuestionario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrimestralCuestionario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrimestralCuestionario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

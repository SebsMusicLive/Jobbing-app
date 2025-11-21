import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnualCuestionario } from './anual-cuestionario';

describe('AnualCuestionario', () => {
  let component: AnualCuestionario;
  let fixture: ComponentFixture<AnualCuestionario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnualCuestionario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnualCuestionario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

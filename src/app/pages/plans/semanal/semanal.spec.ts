import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semanal } from './semanal';

describe('Semanal', () => {
  let component: Semanal;
  let fixture: ComponentFixture<Semanal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Semanal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Semanal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

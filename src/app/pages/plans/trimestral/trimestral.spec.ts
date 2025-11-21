import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trimestral } from './trimestral';

describe('Trimestral', () => {
  let component: Trimestral;
  let fixture: ComponentFixture<Trimestral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trimestral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trimestral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

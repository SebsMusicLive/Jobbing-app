import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anual } from './anual';

describe('Anual', () => {
  let component: Anual;
  let fixture: ComponentFixture<Anual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anual]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anual);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

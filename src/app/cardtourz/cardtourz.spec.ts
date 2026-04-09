import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTourz } from './cardtourz';

describe('CardTourz', () => {
  let component: CardTourz;
  let fixture: ComponentFixture<CardTourz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTourz],
    }).compileComponents();

    fixture = TestBed.createComponent(CardTourz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

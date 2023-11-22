import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyticketsComponent } from './buytickets.component';

describe('BuyticketsComponent', () => {
  let component: BuyticketsComponent;
  let fixture: ComponentFixture<BuyticketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyticketsComponent]
    });
    fixture = TestBed.createComponent(BuyticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlStatementComponent } from './control-statement.component';

describe('ControlStatementComponent', () => {
  let component: ControlStatementComponent;
  let fixture: ComponentFixture<ControlStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlStatementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

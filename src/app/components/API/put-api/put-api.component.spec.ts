import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutApiComponent } from './put-api.component';

describe('PutApiComponent', () => {
  let component: PutApiComponent;
  let fixture: ComponentFixture<PutApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

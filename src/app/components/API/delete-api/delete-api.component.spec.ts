import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteApiComponent } from './delete-api.component';

describe('DeleteApiComponent', () => {
  let component: DeleteApiComponent;
  let fixture: ComponentFixture<DeleteApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

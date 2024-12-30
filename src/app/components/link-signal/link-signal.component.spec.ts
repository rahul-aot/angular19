import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSignalComponent } from './link-signal.component';

describe('LinkSignalComponent', () => {
  let component: LinkSignalComponent;
  let fixture: ComponentFixture<LinkSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

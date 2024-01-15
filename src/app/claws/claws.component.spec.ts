import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClawsComponent } from './claws.component';

describe('ClawsComponent', () => {
  let component: ClawsComponent;
  let fixture: ComponentFixture<ClawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClawsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrifooComponent } from './grifoo.component';

describe('GrifooComponent', () => {
  let component: GrifooComponent;
  let fixture: ComponentFixture<GrifooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrifooComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrifooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

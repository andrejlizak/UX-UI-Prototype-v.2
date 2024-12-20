import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeporiadokComponent } from './neporiadok.component';

describe('NeporiadokComponent', () => {
  let component: NeporiadokComponent;
  let fixture: ComponentFixture<NeporiadokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeporiadokComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeporiadokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

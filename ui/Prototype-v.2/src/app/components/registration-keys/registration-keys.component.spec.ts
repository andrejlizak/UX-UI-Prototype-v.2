import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationKeysComponent } from './registration-keys.component';

describe('RegistrationKeysComponent', () => {
  let component: RegistrationKeysComponent;
  let fixture: ComponentFixture<RegistrationKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationKeysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

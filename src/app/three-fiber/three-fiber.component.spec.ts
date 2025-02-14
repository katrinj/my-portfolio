import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeFiberComponent } from './three-fiber.component';

describe('ThreeFiberComponent', () => {
  let component: ThreeFiberComponent;
  let fixture: ComponentFixture<ThreeFiberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeFiberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeFiberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

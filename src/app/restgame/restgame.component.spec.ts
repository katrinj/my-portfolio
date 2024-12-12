import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestgameComponent } from './restgame.component';

describe('RestgameComponent', () => {
  let component: RestgameComponent;
  let fixture: ComponentFixture<RestgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestgameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

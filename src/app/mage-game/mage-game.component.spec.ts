import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MageGameComponent } from './mage-game.component';

describe('MageGameComponent', () => {
  let component: MageGameComponent;
  let fixture: ComponentFixture<MageGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MageGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MageGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

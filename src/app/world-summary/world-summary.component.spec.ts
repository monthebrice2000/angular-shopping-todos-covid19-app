import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldSummaryComponent } from './world-summary.component';

describe('WorldSummaryComponent', () => {
  let component: WorldSummaryComponent;
  let fixture: ComponentFixture<WorldSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

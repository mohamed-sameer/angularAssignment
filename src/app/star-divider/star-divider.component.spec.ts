import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarDividerComponent } from './star-divider.component';

describe('StarDividerComponent', () => {
  let component: StarDividerComponent;
  let fixture: ComponentFixture<StarDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarDividerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

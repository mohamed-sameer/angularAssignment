import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarDividerDarkComponent } from './star-divider-dark.component';

describe('StarDividerDarkComponent', () => {
  let component: StarDividerDarkComponent;
  let fixture: ComponentFixture<StarDividerDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarDividerDarkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarDividerDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

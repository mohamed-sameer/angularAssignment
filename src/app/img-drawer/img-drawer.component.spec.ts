import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgDrawerComponent } from './img-drawer.component';

describe('ImgDrawerComponent', () => {
  let component: ImgDrawerComponent;
  let fixture: ComponentFixture<ImgDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgDrawerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

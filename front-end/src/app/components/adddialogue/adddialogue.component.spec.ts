import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddialogueComponent } from './adddialogue.component';

describe('AdddialogueComponent', () => {
  let component: AdddialogueComponent;
  let fixture: ComponentFixture<AdddialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

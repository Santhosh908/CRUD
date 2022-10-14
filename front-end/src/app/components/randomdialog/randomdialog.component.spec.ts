import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomdialogComponent } from './randomdialog.component';

describe('RandomdialogComponent', () => {
  let component: RandomdialogComponent;
  let fixture: ComponentFixture<RandomdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { eHomeComponent } from './eHome.component';

describe('eHomeComponent', () => {
  let component: eHomeComponent;
  let fixture: ComponentFixture<eHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ eHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(eHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

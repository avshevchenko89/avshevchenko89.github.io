/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ForInternsComponent } from './for-interns.component';

describe('ForInternsComponent', () => {
  let component: ForInternsComponent;
  let fixture: ComponentFixture<ForInternsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForInternsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForInternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

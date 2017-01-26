import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', function() {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected navnbar-brand <a> text', () => {
    fixture.detectChanges();
    const brand: DebugElement = fixture.debugElement.query(By.css('.navbar-brand'));
    const a = brand.nativeElement;
    expect(a.innerText).toMatch("Call The Hill",
      '<a> should have the title.');
  });
});

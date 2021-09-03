import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubParentComponent } from './github-parent.component';

describe('GithubParentComponent', () => {
  let component: GithubParentComponent;
  let fixture: ComponentFixture<GithubParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

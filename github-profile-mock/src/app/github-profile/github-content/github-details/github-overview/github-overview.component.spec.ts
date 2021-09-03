import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubOverviewComponent } from './github-overview.component';

describe('GithubOverviewComponent', () => {
  let component: GithubOverviewComponent;
  let fixture: ComponentFixture<GithubOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerGroupComponent } from './dealer-group.component';

describe('DealerGroupComponent', () => {
  let component: DealerGroupComponent;
  let fixture: ComponentFixture<DealerGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

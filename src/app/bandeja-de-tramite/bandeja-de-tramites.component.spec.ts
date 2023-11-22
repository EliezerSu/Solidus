import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaDeTramitesComponent } from './bandeja-de-tramites.component';

describe('BandejaDeTramitesComponent', () => {
  let component: BandejaDeTramitesComponent;
  let fixture: ComponentFixture<BandejaDeTramitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BandejaDeTramitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BandejaDeTramitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

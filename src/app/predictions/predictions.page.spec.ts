import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PredictionsPage } from './predictions.page';

describe('PredictionsPage', () => {
  let component: PredictionsPage;
  let fixture: ComponentFixture<PredictionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PredictionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

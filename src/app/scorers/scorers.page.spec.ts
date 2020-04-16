import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScorersPage } from './scorers.page';

describe('ScorersPage', () => {
  let component: ScorersPage;
  let fixture: ComponentFixture<ScorersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScorersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

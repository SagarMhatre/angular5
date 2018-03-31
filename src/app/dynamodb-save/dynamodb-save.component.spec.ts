import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamodbSaveComponent } from './dynamodb-save.component';

describe('DynamodbSaveComponent', () => {
  let component: DynamodbSaveComponent;
  let fixture: ComponentFixture<DynamodbSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamodbSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamodbSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

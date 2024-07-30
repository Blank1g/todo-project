import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoRecentComponent } from './todo-recent.component';

describe('TodoRecentComponent', () => {
  let component: TodoRecentComponent;
  let fixture: ComponentFixture<TodoRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoRecentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoRecentComponent);
    component = fixture.componentInstance;
    component.todo = {
      title: 'Test',
      description: 'Test',
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

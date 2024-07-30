import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

import { TodoItemComponentPage } from './todo-item.component';

class BlankCmp {}

describe('TodoItemComponentPage', () => {
  let component: TodoItemComponentPage;
  let fixture: ComponentFixture<TodoItemComponentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoItemComponentPage, HttpClientTestingModule, RouterModule.forRoot(
        [{path: '', component: BlankCmp}]
      )]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoItemComponentPage);
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

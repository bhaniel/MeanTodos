import { Component } from '@angular/core';
import {TodosComponent} from './components/todos';
import {HTTP_PROVIDERS} from '@angular/http';
import {TodoService} from './services/todo.service';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TodosComponent],
  providers: [TodoService , HTTP_PROVIDERS],
})
export class AppComponent {
  title = 'app works!';
}

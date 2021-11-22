import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, observable, of } from 'rxjs';
import {Task} from '../Task';
import {TASKS} from '../mock-task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  constructor() { }

  getTasks(): Observable< Task[]> {
    // turn it into observable
    const tasks = of(TASKS);
    return tasks;
  }
}

/**
 * @author Muhammad Rowaha <ashfaqrowaha@gmail.com>
 */

import { Todo } from "../dtos/todos.dto";
import * as _ from "lodash";
import Ids from "ids";
import { TodosApi } from "../api/todos.api";
import { action, computed, flow, makeAutoObservable, makeObservable, observable } from "mobx";

export class TodosService {

  @observable
  public todos : Todo[];

  @observable
  public loading: boolean = false;

  private ids : Ids;
  private todosApi : TodosApi;

  constructor(todosApi: TodosApi) {
    this.todos = [];
    this.ids = new Ids();
    this.ids.nextPrefixed('Todo_');
    this.todosApi = todosApi;
    makeAutoObservable(this, {}, {
      autoBind: true
    });
  }
  
  @action
  fetch() {
    this.todos = this.todosApi.getAll();
  }

  @computed get todoCount() {
    return this.todos.length;
  }

  @flow
  *asyncFetch() {
    this.loading = true;
    this.todos = yield this.todosApi.asyncGetAll();
    this.loading = false;
  }

  @flow
  *asyncFetchWithAbort(abortController : AbortController) {
    this.loading = true;
    try {
      this.todos = yield this.todosApi.fetchTodos(abortController);
    } catch (err) {
      console.log(err);
    } finally {
      this.loading = false;
    }
  }

  static $inject = ['todosApi']
}


export default {
  __init__: ['todosService'],
  'todosService': ['type', TodosService]
}
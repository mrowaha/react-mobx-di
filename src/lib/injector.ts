import { Injector } from "didi";
import todosApiProvider from "./api/todos.api";
import todosService from "./store/todos.service";

const injector : Injector = new Injector([
  todosApiProvider,
  todosService
]);

export default injector;
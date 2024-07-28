import { Todo } from "../dtos/todos.dto";

export class TodosApi {

  getAll() : Todo[] {
    return [
      {
        id: "Todo_123456",
        tasks: ['say hello world']
      },
      {
        id: "Todo_49023flksndgkweng",
        tasks: ['this is another test']
      }
    ]
  }

  async asyncGetAll () : Promise<Todo[]> {
    await new Promise(res => setTimeout(res, 5000));
    return [
      {
        id: "Todo_123456",
        tasks: ['say hello world']
      },
      {
        id: "Todo_49023flksndgkweng",
        tasks: ['this is another test']
      }
    ]
  }

  async fetchTodos (abortController : AbortController) : Promise<Todo[]> {
    await new Promise(res => setTimeout(res, 5000));
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
      signal: abortController.signal
    });
    const data = await res.json();
    console.log(data);
    return [
      {
        id: "Todo_123456",
        tasks: ['say hello world']
      },
      {
        id: "Todo_49023flksndgkweng",
        tasks: ['this is another test']
      }
    ]
  }

}

export default {
  __init__: ['todosApi'],
  'todosApi': ['type', TodosApi]
}
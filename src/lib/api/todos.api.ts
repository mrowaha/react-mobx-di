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

}

export default {
  __init__: ['todosApi'],
  'todosApi': ['type', TodosApi]
}
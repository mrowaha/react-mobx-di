"use client";

import { InjectorContext } from "@/lib/InjectorProvider";
import { observer } from "mobx-react";
import { useContext, useMemo, useEffect } from "react";
import * as _ from "lodash";
import { TodosService } from "@/lib/store/todos.service";
import { flowResult } from "mobx";

function Home() {

  const injector = useContext(InjectorContext);
   const todosService = useMemo(() => {
    if (!_.isNull(injector)) return injector.get<TodosService>('todosService');
  }, [injector]);

  return (
    <>
      <h1>Todos {todosService?.todoCount}</h1>
      {
        todosService?.todos.map(todo => (
          <h2 key={todo.id}>{todo.id}</h2>
        ))
      }
      <button onClick={async () => {
          const value = await flowResult(todosService?.asyncFetch());
      }}>Fetch</button>

      <button onClick={async () => {
        const controller = new AbortController();
        todosService?.asyncFetchWithAbort(controller);
        await new Promise<void>(res => {
          setTimeout(() => {
            controller.abort("cancelled by user");
            res();
          }, 2500);
        })
      }}>
        Fetch But Cancel
      </button>

      {
        todosService?.loading && <h5>Loading....</h5>
      }
    </>
  );
}

export default observer(Home);
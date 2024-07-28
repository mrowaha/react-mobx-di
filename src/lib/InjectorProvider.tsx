"use client";
import { createContext, PropsWithChildren } from "react";
import injector from "./injector";
import { Injector } from "didi";

export const InjectorContext = createContext<Injector | null>(null);

export default function InjectorContextProvider({children} : PropsWithChildren) {
  return (
    <InjectorContext.Provider value={injector}>
      {children}
    </InjectorContext.Provider>
  )
}
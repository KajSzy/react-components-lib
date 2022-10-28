import { createContext, useContext } from "react";

export interface StickyContextInterface {
  nodes: HTMLDivElement[];
  addRef: (key: string, ref: HTMLDivElement) => void;
  removeRef: (key: string) => void;
}

const StickyContext = createContext<StickyContextInterface>({
  nodes: [],
  addRef: () => {},
  removeRef: () => {},
});

export const StickyProviderWrapper = StickyContext.Provider;
export const useStickyContext = () => useContext(StickyContext);

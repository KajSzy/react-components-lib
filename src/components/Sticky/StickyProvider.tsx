import React from "react";
import {
  StickyContextInterface,
  StickyProviderWrapper,
} from "./Sticky.Context";

type StickyProviderProps = {
  children: React.ReactNode;
};

const StickyProvider: React.FC<StickyProviderProps> = ({ children }) => {
  const [nodes, setNodes] = React.useState<
    Record<string, StickyContextInterface["nodes"][number]>
  >({});

  const addRef: StickyContextInterface["addRef"] = (key, ref) => {
    setNodes((curr) => ({
      ...curr,
      [key]: ref,
    }));
  };
  const removeRef: StickyContextInterface["removeRef"] = (key) => {
    setNodes((curr) => {
      const { [key]: value, ...rest } = curr;
      return rest;
    });
  };

  return (
    <StickyProviderWrapper
      value={{
        addRef,
        nodes: Object.values(nodes),
        removeRef,
      }}
    >
      {children}
    </StickyProviderWrapper>
  );
};

StickyProvider.displayName = "StickyProvider";

export default StickyProvider;

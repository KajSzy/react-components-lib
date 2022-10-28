import React, { useEffect, useRef } from "react";
import { useStickyContext } from "./Sticky.Context";

type StickyItemProps = React.PropsWithChildren & {
  isStackable?: boolean;
  id?: string;
};

const getRandomId = () =>
  (performance.now().toString(36) + Math.random().toString(36)).replace(
    /\./g,
    ""
  );

const StickyItem: React.FC<StickyItemProps> = ({
  children,
  id,
  isStackable = true,
}) => {
  const idRef = useRef(id ?? getRandomId());
  const ref = useRef<HTMLDivElement>(null);
  const { addRef, removeRef, nodes } = useStickyContext();

  const getStickyItemsCumulativeHeight = () => {
    if (!isStackable) {
      return top;
    }
    return nodes
      .slice(
        0,
        nodes.findIndex((v) => v === ref.current)
      )
      .map((item) => item.getBoundingClientRect().height)
      .reduce((prev, item) => prev + item, 0);
  };

  useEffect(() => {
    if (ref.current) {
      addRef(idRef.current, ref.current);
    }
    return () => {
      removeRef(idRef.current);
    };
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.top = `${getStickyItemsCumulativeHeight()}px`;
    }
  }, [nodes]);

  return (
    <div ref={ref} className="sticky">
      {children}
    </div>
  );
};

StickyItem.displayName = "StickyItem";

export default StickyItem;

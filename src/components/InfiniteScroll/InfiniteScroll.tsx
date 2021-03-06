import React, {
  ReactElement,
  ReactNode,
  memo,
  useCallback,
  useEffect,
} from "react";

interface Props {
  children: ReactNode;
  isEmpty?: boolean;
  emptyComponent?: () => ReactElement;
  onEndReached?: () => void;
}

const WrapList = ({
  isEmpty,
  children,
  emptyComponent,
  onEndReached,
}: Props) => {
  const _runFunc = useCallback(() => {
    if (
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight ===
      window.scrollY
    ) {
      onEndReached!();
    }
  }, [onEndReached]);

  useEffect(() => {
    if (onEndReached) {
      window.addEventListener("scroll", _runFunc);
    }

    return () => {
      if (onEndReached) {
        window.removeEventListener("scroll", _runFunc);
      }
    };
  }, [_runFunc, onEndReached]);

  return isEmpty ? emptyComponent!() : <>{children}</>;
};

export default memo(WrapList);

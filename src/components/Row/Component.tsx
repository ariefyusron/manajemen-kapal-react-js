import React, { CSSProperties, ReactNode, memo } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  justifyContent?: "center" | "start" | "end" | "around" | "between";
  style?: CSSProperties;
}

const Component = ({ children, className, justifyContent, style }: Props) => (
  <div
    className={`row justify-content-md-${justifyContent} ${className}`}
    style={style}
  >
    {children}
  </div>
);

Component.defaultProps = {
  justifyContent: "start",
  className: "",
};

export default memo(Component);

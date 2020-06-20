import React, { ReactNode, memo } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Component = ({ children, className }: Props) => (
  <div className={`container-fluid ${className}`}>{children}</div>
);

export default memo(Component);

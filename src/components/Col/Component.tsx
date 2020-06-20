import React, { ReactNode, memo } from "react";

interface Props {
  children: ReactNode;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  className?: string;
}

const Component = ({ children, size, className }: Props) => (
  <div className={`col-md-${size} ${className}`}>{children}</div>
);

Component.defaultProps = {
  size: 12,
  className: ""
};

export default memo(Component);

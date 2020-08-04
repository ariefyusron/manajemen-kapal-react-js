import React, { ReactNode, memo } from "react";

interface Props {
  children: ReactNode;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  className?: string;
  id?: string;
}

const Component = ({ children, size, className, id }: Props) => (
  <div className={`col-md-${size} ${className}`} id={id}>
    {children}
  </div>
);

Component.defaultProps = {
  size: 12,
  className: "",
  id: ""
};

export default memo(Component);

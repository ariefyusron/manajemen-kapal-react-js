import React, { CSSProperties, ReactNode, SyntheticEvent, memo } from "react";

interface Props {
  children: ReactNode;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  className?: string;
  style?: CSSProperties;
  onClick?: (e: SyntheticEvent) => void;
}

const Component = ({ children, size, className, style, onClick }: Props) => (
  <div
    className={`col-md-${size} ${className}`}
    style={style}
    onClick={e => onClick && onClick(e)}
  >
    {children}
  </div>
);

Component.defaultProps = {
  size: 12,
  className: ""
};

export default memo(Component);

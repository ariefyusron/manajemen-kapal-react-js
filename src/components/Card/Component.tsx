import React, { ReactNode, memo } from "react";

interface Props {
  children: ReactNode;
  title?: string;
}

const Component = ({ children, title }: Props) => (
  <div className="card">
    {title !== "" && <div className="card-header">{title}</div>}
    <div className="card-body">{children}</div>
  </div>
);

Component.defaultProps = {
  title: ""
};

export default memo(Component);

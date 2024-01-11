import React from "react";
import styles from "./Button.css";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Button = ({
  theme = "secondary",
  size = "medium",
  backgroundColor,
  className,
  isDisabled = false,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={cx("button", size, theme, className)}
      style={{ backgroundColor }}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

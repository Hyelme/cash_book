import React from "react";
import styles from "./Button.css";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Button = ({
  theme = "basic",
  size = "medium",
  backgroundColor,
  className,
  isDisabled = false,
  children,
  ...props
}) => {
  return (
    <div className="btn-container">
      {theme === "label" && (
        <div className={`label-btn-front ${size}-front`}>₩</div>
      )}
      <button
        type="button"
        className={cx("button", size, theme, className)}
        style={{ backgroundColor }}
        disabled={isDisabled}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

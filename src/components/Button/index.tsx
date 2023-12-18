import clsx from "clsx";
import { HTMLAttributes } from "react";

import styles from "./Button.module.scss";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "dropdown" | "secondary";
}

export const Button = ({ children, className, variant, ...props }: Props) => {
  return (
    <button
      className={clsx(styles.button, className, variant || "")}
      data-variant="contained"
      {...props}
    >
      {children}
    </button>
  );
};

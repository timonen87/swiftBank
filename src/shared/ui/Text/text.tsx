import {
  Children,
  DetailedHTMLProps,
  ForwardedRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";
import cn from "classnames";
import styles from "./text.module.css";

interface TextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size: "s" | "m" | "l";
  children: ReactNode;
}

export const Text = (
  { className, children, size = "m", ...props }: TextProps,
  ref: ForwardedRef<HTMLInputElement>,
): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size == "s",
        [styles.m]: size == "m",
        [styles.l]: size == "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

import { DetailedHTMLProps, ReactNode } from "react";
import style from "./headline.module.css";

interface HeadLineProps {
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
}

export const HeadLine = ({ tag, children }: HeadLineProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return <h1 className={style.h1}>{children}</h1>;
    case "h2":
      return <h2 className={style.h2}>{children}</h2>;
    case "h3":
      return <h2 className={style.h3}>{children}</h2>;
  }
};

export default HeadLine;

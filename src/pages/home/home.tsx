import React from "react";
import style from "./Home.module.css";
import cn from "classnames";
import HeadLine from "@/shared/ui/head-line/head-line";

export function HomePage() {
  return (
    <div className={cn(style.title)}>
      <HeadLine tag="h1">Home</HeadLine>
    </div>
  );
}

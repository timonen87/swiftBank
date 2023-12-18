import React from "react";
import style from "./Home.module.css";
import cn from "classnames";
import { HeadLine, Input } from "@/shared/ui";

export function HomePage() {
  return (
    <div className={cn(style.title)}>
      <HeadLine tag="h1">Заголовок h1</HeadLine>
      <HeadLine tag="h2">Заголовок h2</HeadLine>
      <HeadLine tag="h3">Заголовок h3</HeadLine>

      <Input placeholder="Поиск" />
    </div>
  );
}

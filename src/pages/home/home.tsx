import React from "react";
import style from "./Home.module.css";
import cn from "classnames";
import { HeadLine, Input, Text } from "@/shared/ui";

export function HomePage() {
  return (
    <div className={cn(style.title)}>
      <HeadLine tag="h1">Заголовок h1</HeadLine>
      <HeadLine tag="h2">Заголовок h2</HeadLine>
      <HeadLine tag="h3">Заголовок h3</HeadLine>

      <Input placeholder="Поиск" />

      <Text size="s">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minima
        fugit id, doloremque laudantium, obcaecati voluptates eum inventore
        eveniet minus cupiditate iste eligendi? Hic sunt mollitia impedit
        inventore exercitationem cupiditate!
      </Text>
    </div>
  );
}

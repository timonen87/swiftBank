import React from "react";
import style from "./Home.module.css";
import cn from "classnames";
import { HeadLine, Input, Text, Textarea } from "@/shared/ui";

export function HomePage() {
  return (
    <div className={cn(style.title)}>
      <HeadLine tag="h1">Size S</HeadLine>
      <Text size="s">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minima
        fugit id, doloremque laudantium, obcaecati voluptates eum inventore
        eveniet minus cupiditate iste eligendi? Hic sunt mollitia impedit
        inventore exercitationem cupiditate!
      </Text>
      <HeadLine tag="h2">Size M</HeadLine>
      <Text size="m">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minima
        fugit id, doloremque laudantium, obcaecati voluptates eum inventore
        eveniet minus cupiditate iste eligendi? Hic sunt mollitia impedit
        inventore exercitationem cupiditate!
      </Text>
      <HeadLine tag="h3">Size 3</HeadLine>
      <Text size="l">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minima
        fugit id, doloremque laudantium, obcaecati voluptates eum inventore
        eveniet minus cupiditate iste eligendi? Hic sunt mollitia impedit
        inventore exercitationem cupiditate!
      </Text>
      <HeadLine tag="h3">Input</HeadLine>
      <Input placeholder="Поиск" />
      <HeadLine tag="h3">Textarea</HeadLine>
      <Textarea></Textarea>
    </div>
  );
}

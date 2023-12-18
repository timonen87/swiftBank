import React from "react";
import style from "./Home.module.css";
import cn from "classnames";

export function HomePage() {
  return (
    <div className={cn(style.title)}>
      <h1>Home</h1>
    </div>
  );
}

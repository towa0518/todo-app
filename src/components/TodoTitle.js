import React, { memo } from "react";

export const TodoTitle = memo(({ title, as }) => {
  // as が h1 ならばタイトルは h1 はタグ
  if (as === "h1") {
    return <h1>{title}</h1>;
  }
  // as が h2 ならばタイトルは h2 はタグ
  if (as === "h2") {
    return <h2>{title}</h2>;
  }
  // どちらでもなければ p タグ
  return <p>{title}</p>;
});

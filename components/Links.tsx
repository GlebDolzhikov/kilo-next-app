import React from "react";
import Link from "next/link";

export const Links: React.FC = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <Link href={"/"}>🎹SPA - Single page application</Link> <br />
      <Link href={"/SSG"}>🛑SSG - Static Generated Content</Link>{" "}
      <Link href={"/SSR"}>♽️SSR - Server Side Rendering</Link>{" "}
      <Link href={"/ISR"}>⏳ISR - Incremental Static Regeneration</Link>
      <br />
      <Link href={"/api/revalidate?secret=123"}>🔥ISR - revalidation API</Link>
    </div>
  );
};

import React from "react";
import Link from "next/link";

export default function product() {
  return (
    <div>
      <h1>Nextjs by Ditksu</h1>
      <img src="/vercel.svg" height={100}></img>
      <Link href="/product">
        <a>Products</a>
      </Link>
      ||
      <Link href="/aboutus">
        <a>aboutus</a>
      </Link>
    </div>
  );
}

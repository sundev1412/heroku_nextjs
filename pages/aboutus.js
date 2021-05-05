import React from "react";
import Link from "next/link";
import Image from "next/image";

const myArray = ["iphone", "hp", "huawai"];
var mytestweb = "dit ksu";
const mystatus = true;
var myamount = 100;
console.log(myArray);
console.log(mytestweb);
console.log(mystatus);

const ImgComponent = () => (
  <Image src="/ajsun.png" height={144} width={144} alt="DiTKSU" />
);

export default function aboutus() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "green" }}>About us</h1>
      <img src="./favicon.ico"></img>
      <br />
      <img src="./vercel.svg"></img>
      <p style={{ color: "blue" }}>Welcome to Digital Technology </p>
      <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: ping;
        }
      `}</style>

      <p>
        Department of Digital Technology Faculty of Administrative Science
        Kalasin University
      </p>

      <h1 className="title">
        <Link href="/">
          <a>Home</a>
        </Link>
      </h1>
      <p>
        <ImgComponent></ImgComponent>
      </p>
    </div>
  );
}

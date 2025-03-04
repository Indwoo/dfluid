import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Banner from "../components/Banner";
import Tour from "../components/Tour";

export default function Home() {
  return (
    <div>
      <Header />
      <Card />
      <Banner />
      <Tour />
    </div>
  );
}
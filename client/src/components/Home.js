import React from "react";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="padding d-flex flex-column text-center justify-content-center">
        <h1 className="text-primary"> Home</h1>
        <h1 className="text-danger"> Home</h1>
      </div>
    </div>
  );
}

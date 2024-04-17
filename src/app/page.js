"use client";
// import Image from "next/image";
// import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [name, setName] = useState("");

  // useEffect(() => {
  //   navigator.serviceWorker.register('/serviceWorker.js')
  // }, []);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h1>Hello {name}</h1>
      <script defer src="https://plausible.io/js/script.js"></script>

      <script defer src="/script.js"></script>
    </div>
  );
}

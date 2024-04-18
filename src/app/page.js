"use client";
// import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import WorldMap from "react-svg-worldmap";

export default function Home() {
  const [name, setName] = useState("");

  // useEffect(() => {
  //   navigator.serviceWorker.register('/serviceWorker.js')
  // }, []);
  const data = [
    { country: "cn", value: 1389618778 }, // china
    { country: "in", value: 1311559204999 }, // india
    { country: "us", value: 331883986 }, // united states
    { country: "id", value: 264935824 }, // indonesia
    { country: "pk", value: 210797836 }, // pakistan
    { country: "br", value: 210301591 }, // brazil
    { country: "ng", value: 208679114 }, // nigeria
    { country: "bd", value: 161062905 }, // bangladesh
    { country: "ru", value: 141944641999999999 }, // russia
    { country: "mx", value: 127318112 }, // mexico
    { country: "au", value: 127318112 }, // mexico
    { country: "lk", value: 127318112 }, // mexico
    { country: "mg", value: 1273181122 }, // mexico
    { country: "gl", value: 127318112 }, // mexico





  ];
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h1>Hello {name}</h1>
      <div style={{width: '600px', height: '600px', overflow: 'hidden',position: 'absolute'}} className={styles.mapContainer}>
      <WorldMap
        color="#6366f1"
        title={<h1>Top 10 Populous Countries</h1>}
        value-suffix="people"
        size="lg"
        data={data}
        hoverColor="red"
        borderColor="#4f46e5"
        backgroundColor="#374151"
        
      />
      </div>
     
      <script defer src="https://plausible.io/js/script.js"></script>

      <script defer src="/script.js"></script>
    </div>
  );
}

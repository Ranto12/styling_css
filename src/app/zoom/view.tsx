"use client";

// import Image from "next/image";
import styles from "./style.module.css";
import { useState } from "react";

const ZoomView = () => {
  const [zoomStyle, setZoomStyle] = useState({
    "--url": "url(/1.jpg)",
    "--zoom-x": "0%",
    "--zoom-y": "0%",
    "--display": "none",
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = (event.target as HTMLDivElement).getBoundingClientRect();
    const pointer = {
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    };

    setZoomStyle({
      "--url": "url(/1.jpg)",
      "--zoom-x": `${pointer.x}%`,
      "--zoom-y": `${pointer.y}%`,
      "--display": "block",
    });
  };

  const handleMouseOut = () => {
    setZoomStyle((prev) => ({
      ...prev,
      "--display": "none",
    }));
  };

  return (
    <div
      id="imageZoom"
      className={styles.imageZoom}
      style={zoomStyle as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      {/* <Image
        src="/images/shirt/1.jpg"
        alt="imageZoom"
        layout="fill"
        objectFit="cover" 
      /> */}
      {/* <img src="/images/shirt/1.jpg" alt="Zoomable Image" /> */}
    </div>
  );
};

export default ZoomView;

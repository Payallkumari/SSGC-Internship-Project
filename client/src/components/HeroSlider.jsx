import React, { useEffect, useState } from "react";

export default function HeroSlider({ images = [] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images]);

  if (images.length === 0) return null;

  return (
    <div
      className="relative bg-cover bg-center h-[500px] transition-all duration-700"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center" />
    </div>
  );
}

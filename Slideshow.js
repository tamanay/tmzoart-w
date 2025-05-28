import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/recent_performance.jpg",
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <Image
        src={slides[current]}
        alt={`اسلاید ${current + 1}`}
        layout="fill"
        objectFit="cover"
        className="transition-opacity duration-700"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
        <Image
          src="/images/logo_tmzo.png"
          alt="لوگو تمنای ظهور"
          width={120}
          height={120}
          className="rounded-full border border-yellow-300"
        />
        <h2 className="mt-4 text-4xl font-bold text-yellow-400 font-COLAK drop-shadow-lg">
          گروه فرهنگی هنری تمنای ظهور - سفیدشهر
        </h2>
        <p className="mt-2 text-lg text-yellow-200 max-w-xl text-center">
          صدایی برای ظهور، نوایی برای دل‌ها
        </p>
      </div>
    </section>
  );
}
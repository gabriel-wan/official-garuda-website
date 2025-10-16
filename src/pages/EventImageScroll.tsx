import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface YearEventData {
  title: string;
  subtitle: string;
  description: string;
  displayImage: string;
  images: string[];
}

export default function EventImageScroll({ eventData }: { eventData: YearEventData }) {
  // Ref to track scrolling within this container.
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Hook to track vertical scroll progress from 0 to 1
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Calculate the total horizontal translation.
  // Assuming each image is 100vw wide, the total width is (images.length * 100vw).
  // Since the first image starts in view, the remaining scroll is (images.length - 1) * 100vw.
  const totalTranslation = -(eventData.images.length - 1) * 100;

  // Transform vertical scroll (0 -> 1) to horizontal x translation.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `${totalTranslation}vw`]);

  // Base path for the images.
  const basePath = "/assets/eventsCarousel/";

  return (
    // A tall container so we have room to scroll.
    <div ref={containerRef} style={{ height: "200vh" }}>
      {/* Sticky container to keep the images in view while scrolling */}
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        {/* The motion div moves horizontally as you scroll */}
        <motion.div style={{ display: "flex", x }}>
          {eventData.images.map((img, index) => (
            <img
              key={index}
              src={`${basePath}${img}`}
              alt={`Event image ${index + 1}`}
              style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

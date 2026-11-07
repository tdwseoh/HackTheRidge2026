"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";

const photos = [
  { src: "/history%20photos/photo6.jpg", alt: "Students building projects together around a table in the library" },
  { src: "/last_year/history2.jpeg", alt: "A group of students gathered around their laptops at Hack The Ridge" },
  { src: "/history%20photos/photo1.jpg", alt: "A team discussing their project beside a classroom whiteboard" },
  { src: "/history%20photos/photo2.jpeg", alt: "Volunteers ready to serve pizza during the event" },
  { src: "/history%20photos/photo3.jpg", alt: "A participant showing the Hack The Ridge design on their T-shirt" },
  { src: "/history%20photos/photo4.jpg", alt: "The Hack The Ridge community posing together on stage" },
  { src: "/history%20photos/photo5.jpeg", alt: "Students collaborating at a table with laptops" },
  { src: "/history%20photos/photo7.jpg", alt: "A team working on their project in a classroom" },
  { src: "/history%20photos/photo8.jpg", alt: "Friends taking a break together at Hack The Ridge" },
  { src: "/last_year/history1.jpg", alt: "Students celebrating together on stage" },
  { src: "/last_year/history3.jpg", alt: "Four friends posing together in the school hallway" },
  { src: "/last_year/history4.jpg", alt: "A team coding side by side at their laptops" },
  { src: "/last_year/history5.jpg", alt: "Students sharing pizza during a break" },
];

export default function EventGallery() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const gallery = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setPlaying(!motion.matches);
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    motion.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
    if (gallery.current) observer.observe(gallery.current);
    return () => {
      motion.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!playing || hovered || focused || !visible || !pageVisible) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % photos.length), 5000);
    return () => window.clearInterval(timer);
  }, [playing, hovered, focused, visible, pageVisible]);

  const move = (direction: number) => {
    setPlaying(false);
    setActive((index) => (index + direction + photos.length) % photos.length);
  };

  return (
    <div
      id="experience"
      ref={gallery}
      className="htr-gallery"
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos from past Hack The Ridge events"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false); }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <div className="htr-gallery-stage">
        {photos.map((photo, index) => (
          <div key={photo.src} className={`htr-gallery-slide${index === active ? " is-active" : ""}`} aria-hidden={index !== active}>
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 767px) 100vw, 1100px" className="object-cover" loading={index === 0 ? "eager" : "lazy"} />
          </div>
        ))}
      </div>
      <div className="htr-gallery-toolbar">
        <p className="htr-gallery-label">Previously at the Ridge</p>
        <div className="htr-gallery-controls">
          <span className="htr-gallery-counter" aria-live={playing ? "off" : "polite"} aria-atomic="true">{String(active + 1).padStart(2, "0")} / {photos.length}</span>
          <button type="button" onClick={() => move(-1)} aria-label="Previous photo"><ArrowLeft size={18} aria-hidden="true" /></button>
          <button type="button" className="htr-gallery-play" onClick={() => setPlaying((current) => !current)} aria-label={playing ? "Pause photo rotation" : "Play photo rotation"}>{playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}<span>{playing ? "Pause" : "Play"}</span></button>
          <button type="button" onClick={() => move(1)} aria-label="Next photo"><ArrowRight size={18} aria-hidden="true" /></button>
        </div>
      </div>
    </div>
  );
}

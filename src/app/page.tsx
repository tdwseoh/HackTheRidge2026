"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Instagram } from "lucide-react";
import GradientSection from "./components/GradientSection";
import AnimatedNavbar from "./components/AnimatedNavbar";
import Footer from "./components/Footer";
import CyberWordmark from "./components/CyberWordmark";
import Background from './components/Background';
import ContactTeam from "./components/ContactTeam";
import SponsorsGrid from "./components/SponsorsGrid";
import HistoryPuzzleSection from "./components/HistoryPuzzleSection";
import TeamSection from "./components/TeamSection";
import EventGallery from "./components/EventGallery";
import { openMapsForDevice } from "@/lib/maps";
import { REGISTRATION_URL } from "@/lib/links";



const winnerCards = [
  {
    title: "First Place",
    image: "/winners/1.JPG",
  },
  {
    title: "Second Place",
    image: "/winners/2.JPG",
  },
  {
    title: "Third Place",
    image: "/winners/3.JPG",
  },
  {
    title: "Best Solo",
    image: "/winners/solo.JPG",
  },
  {
    title: "Best Women's Team",
    image: "/winners/Best_Womens.JPG",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const openMaps = () => {
    openMapsForDevice("Iroquois Ridge High School, Oakville, Ontario");
  };

  return (
    <main className="site-shell min-h-screen w-full overflow-x-hidden overflow-hidden text-htr-white">
      <AnimatedNavbar />
      <Background />

      <section id="home" className="htr-hero relative px-5 text-htr-white sm:px-8 lg:px-12" aria-labelledby="home-title">
        <div className="htr-hero-panel relative z-10 mx-auto w-full max-w-7xl">
          <h1 id="home-title" className="sr-only">Hack The Ridge 2026</h1>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }} className="htr-hero-stage">
            <div className="htr-hero-wordmark-wrap" aria-hidden="true">
              <CyberWordmark variant="hero" className="mx-auto w-full" />
            </div>
            <div className="htr-hero-date">
              <p className="htr-eyebrow">High school hackathon</p>
              <div className="htr-coming-soon"><time dateTime="2026-12-12" className="htr-date-day">December 12, 2026</time></div>
            </div>
          </motion.div>
          <div className="htr-event-strip" aria-label="Quick event info">
            <button type="button" onClick={openMaps} className="htr-event-location group" aria-label="Open Iroquois Ridge High School in Maps">
              <MapPin className="h-5 w-5 shrink-0 text-htr-green" />
              <span><strong>Iroquois Ridge HS</strong><span className="block text-sm text-htr-white/80">Oakville, Ontario</span></span>
            </button>
            <a
              href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer"
              className="htr-register-link"
            >
              Sign Up
            </a>
          </div>

        </div>
      </section>

      <section id="about" className="relative overflow-hidden px-5 py-16 text-htr-white sm:px-8 sm:py-20 lg:px-12 lg:py-24" aria-labelledby="about-title">
        <div className="htr-open-content relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
            <h2 id="about-title" className="font-sacco max-w-3xl text-6xl font-black leading-[0.95] sm:text-7xl">Your idea. One day.</h2>
            <p className="max-w-xl text-lg leading-8">12 hours to build, learn from mentors, and meet other students. No coding experience needed.</p>
          </div>
          <EventGallery />
        </div>
      </section>

      <section id="winners" className="relative overflow-hidden px-5 py-16 text-htr-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="htr-open-content relative z-10 mx-auto max-w-7xl">
          <motion.div
            className="border-b border-htr-green/25 pb-10"
          >
            <div className="max-w-5xl">
              <h2 className="font-sacco mt-4 text-6xl font-black uppercase leading-[0.86] tracking-[0.035em] text-htr-white sm:text-7xl lg:text-8xl">
                The 2025 winners.
              </h2>
            </div>
          </motion.div>

          <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-6">
            {winnerCards.map((card, index) => {
              return (
              <motion.article
                key={card.title}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden ${index < 3 ? "xl:col-span-2" : "xl:col-span-3"}`}
              >
                <div className={`relative overflow-hidden ${index < 3 ? "aspect-[4/3]" : "aspect-[16/9]"}`}>
                  <Image
                    src={card.image}
                    alt={card.title === "Best Women's Team" ? "Women's team at Hack The Ridge 2025" : `${card.title} winners at Hack The Ridge 2025`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 34vw"
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.035]"
                  />
                  {/* Hide the women's team award name until the correct wording is confirmed. */}
                  {card.title !== "Best Women's Team" && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/65 to-transparent px-5 pb-3 pt-5">
                      <h3 className="winner-placement-label text-xl font-black sm:text-2xl">{card.title}</h3>
                    </div>
                  )}
                </div>
              </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <HistoryPuzzleSection />

      <section id="register" className="relative scroll-mt-28 px-5 py-24 text-htr-white sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="htr-open-content relative mx-auto grid max-w-7xl gap-10 border-y border-htr-green/30 py-12 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-20 lg:py-16">
          <div>
            <h2 className="font-sacco mt-4 text-6xl font-black uppercase leading-[0.95] tracking-[0.035em] sm:text-7xl lg:text-8xl">Ready to build?</h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-md text-lg leading-8">See you December 12.</p>
            <div className="htr-registration-actions">
              <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="htr-register-link">Sign Up</a>
              <a href="https://www.instagram.com/hacktheridge/" target="_blank" rel="noopener noreferrer" className="htr-secondary-link"><Instagram aria-hidden="true" size={22} strokeWidth={1.8} /><span>Check Instagram for updates</span></a>
            </div>
          </div>
        </div>
      </section>

      <section id="sponsors" className="relative overflow-hidden px-5 py-16 text-htr-white sm:px-8 sm:py-20 lg:px-12 lg:py-24" aria-labelledby="sponsors-title">
        <div className="htr-open-content relative z-10 mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 border-b border-htr-green/25 pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 id="sponsors-title" className="font-sacco text-6xl font-black leading-[0.95] sm:text-7xl">Support HTR.</h2>
              <p className="mt-5 max-w-xl text-lg leading-8">Help students build through prizes, meals, mentorship, or workshops.</p>
            </div>
            <ContactTeam />
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-bold">Our sponsors.</h3>
            <div className="mt-8"><SponsorsGrid /></div>
          </div>
        </div>
      </section>

      <TeamSection />
      <GradientSection />
      <Footer />
    </main>
  );
}

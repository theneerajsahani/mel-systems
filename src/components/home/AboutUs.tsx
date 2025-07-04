"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

const phrases = [
  "At MEL Systems, we've been living and breathing lubrication and oil conditioning for over 30 years. Our team is built on hands-on experience, deep technical know-how, and a genuine passion for helping our clients get the most out of their machines. Whether it's solving a tricky maintenance issue or improving overall machinery performance, we're here to make sure everything runs smoother, longer, and better.",
  "Recently, we took a step further by launching a new safety division—born out of our ongoing drive to offer more to our clients. In partnership with major industry leaders, we now provide cutting-edge video monitoring solutions for vehicles and cranes, adding an extra layer of protection and peace of mind on job sites.",
  "We're proud of where we've come from—and even more excited about where we're headed.",
];

export default function AboutUsPage() {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const container = useRef<HTMLElement>(null);
  const body = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Wait for DOM to be ready and refs to be populated
    const timer = setTimeout(() => {
      if (refs.current.length > 0) {
        createAnimation();
      }
    }, 500);

    // Handle window resize to refresh animation
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to kill ScrollTrigger on unmount
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const createAnimation = () => {
    if (refs.current.length === 0) return;

    // Filter out null refs
    const validRefs = refs.current.filter((ref) => ref !== null);

    if (validRefs.length === 0) return;

    // Responsive stagger values that work properly across all screens
    const getStaggerValue = () => {
      if (window.innerWidth >= 1024) return 0.02; // lg and above - smooth reveal
      if (window.innerWidth >= 768) return 0.015; // md screens - medium reveal
      return 0.03; // sm and below - slightly slower for readability
    };

    // Responsive ScrollTrigger start/end points
    const getScrollTriggerPoints = () => {
      if (window.innerWidth >= 1024) return { start: "top 80%", end: "bottom 30%" }; // large+
      if (window.innerWidth >= 768) return { start: "top 85%", end: "bottom 35%" }; // md
      return { start: "top 90%", end: "bottom 40%" }; // mobile
    };

    const { start, end } = getScrollTriggerPoints();

    gsap.to(validRefs, {
      scrollTrigger: {
        trigger: container.current,
        start,
        end,
        scrub: 1, // Smoother scrub for better control
        markers: false,
        refreshPriority: -1, // Ensure proper refresh on resize
        onRefresh: () => {
          // Re-calculate stagger on screen resize
          gsap.set(validRefs, { opacity: 0.2 });
        },
      },
      opacity: 1,
      ease: "power2.out",
      stagger: {
        amount: getStaggerValue() * validRefs.length,
        from: "start",
      },
    });
  };

  const splitPhrases = (phrases: string[]) => {
    const allElements: React.ReactElement[] = [];
    phrases.forEach((phrase, phraseIndex) => {
      const words = splitWords(phrase);
      allElements.push(
        <div
          key={`phrase_${phraseIndex}`}
          className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 w-full flex flex-wrap justify-center leading-tight"
        >
          {words}
        </div>,
      );
    });
    return allElements;
  };

  const splitWords = (phrase: string) => {
    const body: React.ReactElement[] = [];
    phrase.split(" ").forEach((word: string, i: number) => {
      const letters = splitLetters(word);
      body.push(
        <span
          key={word + "_" + i}
          className="text-[18px] md:text-[24px] lg:text-[32px] font-bold mr-2 sm:mr-3 md:mr-4 lg:mr-5 xl:mr-6 inline-block"
        >
          {letters}
        </span>,
      );
    });

    return body;
  };

  const splitLetters = (word: string) => {
    // Clear refs before pushing to avoid duplicates
    refs.current = [];
    const letters: React.ReactElement[] = [];
    word.split("").forEach((letter: string, i: number) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            if (el && !refs.current.includes(el)) {
              refs.current.push(el);
            }
          }}
          className="opacity-20 text-gray-800"
        >
          {letter}
        </span>,
      );
    });
    return letters;
  };

  return (
    <main
      ref={container}
      className="flex flex-col min-h-screen h-auto items-center justify-center bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 sm:py-24 md:py-28 lg:py-32"
    >
      <h2 className="text-[24px] md:text-[32px] lg:text-[48px] font-bold text-gray-900 mb-8 sm:mb-12 md:mb-16 w-full text-center">
        ABOUT US
      </h2>
      <div
        ref={body}
        className="w-full max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl flex flex-col text-center leading-relaxed"
      >
        {splitPhrases(phrases)}
      </div>
    </main>
  );
}

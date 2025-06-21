'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

const phrases = [
    "At MEL Systems, we've been living and breathing lubrication and oil conditioning for over 30 years. Our team is built on hands-on experience, deep technical know-how, and a genuine passion for helping our clients get the most out of their machines. Whether it's solving a tricky maintenance issue or improving overall machinery performance, we're here to make sure everything runs smoother, longer, and better.",
    "Recently, we took a step further by launching a new safety division—born out of our ongoing drive to offer more to our clients. In partnership with major industry leaders, we now provide cutting-edge video monitoring solutions for vehicles and cranes, adding an extra layer of protection and peace of mind on job sites.",
    "We're proud of where we've come from—and even more excited about where we're headed."
];

export default function AboutUsPage() {
    const refs = useRef<(HTMLSpanElement | null)[]>([]);
    const container = useRef<HTMLElement>(null);
    const body = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        createAnimation();
        
        // Cleanup function to kill ScrollTrigger on unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const createAnimation = () => {
        gsap.to(refs.current, {
            scrollTrigger: {
                trigger: container.current,
                scrub: true,
                start: `top 75%`,
                end: `bottom 35%`,
            },
            opacity: 1,
            ease: "none",
            stagger: 0.003
        });
    };

    const splitPhrases = (phrases: string[]) => {
        const allElements: React.ReactElement[] = [];
        phrases.forEach((phrase, phraseIndex) => {
            const words = splitWords(phrase);
            allElements.push(
                <div key={`phrase_${phraseIndex}`} className="mb-8 w-full">
                    {words}
                </div>
            );
        });
        return allElements;
    }

    const splitWords = (phrase: string) => {
        const body: React.ReactElement[] = [];
        phrase.split(" ").forEach((word: string, i: number) => {
            const letters = splitLetters(word);
            body.push(
                <span 
                    key={word + "_" + i} 
                    className="text-[8vw] sm:text-[6vw] md:text-[4.5vw] lg:text-[3.5vw] xl:text-[3vw] font-bold mr-[2vw] sm:mr-[1.5vw] inline-block"
                >
                    {letters}
                </span>
            )
        });

        return body;
    }

    const splitLetters = (word: string) => {
        const letters: React.ReactElement[] = []
        word.split("").forEach((letter: string, i: number) => {
            letters.push(
                <span 
                    key={letter + "_" + i} 
                    ref={el => {refs.current.push(el)}}
                    className="opacity-30 transition-opacity duration-300 text-gray-800"
                >
                    {letter}
                </span>
            )
        })
        return letters;
    }

    return (
        <main ref={container} className="flex flex-col min-h-screen h-auto items-start justify-center bg-white px-4 md:px-8 lg:px-16 py-16 sm:py-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-12 sm:mb-16 w-full">
                ABOUT US
            </h2>
            <div ref={body} className="w-full max-w-6xl flex flex-col text-left leading-relaxed">
                {splitPhrases(phrases)}
            </div>
        </main>
    )
}
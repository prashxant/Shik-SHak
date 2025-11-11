"use client";

import {  Code2, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function  Hero ()  {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white px-6 py-24 text-center dark:from-gray-950 dark:to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        {/* Small badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
          <Sparkles className="h-4 w-4 text-amber-500" />
          <span>Frontend Developer • Next.js & Tailwind</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
          Building Beautiful, Fast, and Modern Web Experiences
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
          Hi, I’m{" "}
          <span className="font-semibold text-amber-600 dark:text-amber-400">
            Prashant Sharma
          </span>{" "}
          — a frontend developer passionate about crafting intuitive and
          visually stunning web apps using{" "}
          <span className="font-semibold">Next.js</span> and{" "}
          <span className="font-semibold">Tailwind CSS</span>.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/kybr"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <Code2 className="h-4 w-4" />
            Mac Keyboard
          </Link>{" "}
          <Link
            href="/masonary"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <Code2 className="h-4 w-4" />
          Bento Grid
          </Link>{" "}
          <Link
            href="/finta"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <Code2 className="h-4 w-4" />
            Landing page
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <Code2 className="h-4 w-4" />
            Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Search } from "lucide-react";
const HeroSection = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-center text-white">
      <Image
        src="/sign-ramadan.jpg"
        alt="Islamic architecture"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 space-y-6 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold">
          Connect, Learn, and Grow in Faith
        </h1>
        <p className="text-xl">
          Share Islamic knowledge, explore Quranic insights, and build a
          community rooted in faith.
        </p>
        <div className="space-x-4">
          <Link
            href="/signup"
            className="bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700"
          >
            Join Now
          </Link>
          <Link
            href="/explore"
            className="bg-white text-emerald-600 px-6 py-3 rounded-md hover:bg-gray-100"
          >
            Explore Content
          </Link>
        </div>
        <div className="mt-8 relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search for Quran verses, Hadith, or topics..."
            className="w-full px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
          <Search className="absolute right-4 top-3 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const PopularPosts = () => {
  return (
    <section className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Understanding Surah Al-Fatiha",
              snippet:
                "Explore the deeper meanings of the opening chapter of the Quran.",
            },
            {
              title: "Hadith on Patience: Insights and Reflections",
              snippet:
                "Learn about the virtue of patience through Prophetic teachings.",
            },
            {
              title: "Dua for Times of Difficulty",
              snippet:
                "Discover powerful supplications to seek Allah's help during challenging times.",
            },
          ].map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.snippet}</p>
                <Link
                  href={`/post/${index}`}
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularPosts
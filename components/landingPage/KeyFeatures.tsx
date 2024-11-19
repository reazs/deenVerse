import React from 'react'
import {
  Share2,
  HelpCircle,
  Users,
  Bookmark,

} from "lucide-react";
const KeyFeatures = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Share2,
              title: "Share and Discover",
              description:
                "Share Quranic verses, Hadith, and Islamic reflections with the community.",
            },
            {
              icon: HelpCircle,
              title: "Ask and Learn",
              description:
                "Get answers to your questions from scholars and knowledgeable members.",
            },
            {
              icon: Users,
              title: "Community Discussions",
              description:
                "Join study circles and engage in meaningful conversations.",
            },
            {
              icon: Bookmark,
              title: "Personalized Content",
              description:
                "Save, bookmark, and receive personalized recommendations.",
            },
          ].map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <feature.icon className="mx-auto h-12 w-12 text-emerald-600" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures
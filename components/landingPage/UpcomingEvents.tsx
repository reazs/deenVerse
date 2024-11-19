import Link from "next/link";
import React from "react";
import { ChevronRight } from "lucide-react";
const UpcomingEvents = () => {
  return (
    <section className="py-16 bg-emerald-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Upcoming Events & Webinars
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "Live Tafsir Session with Imam Ahmed",
              date: "Nov 20th",
            },
            { title: "Understanding the Names of Allah", date: "Dec 5th" },
            { title: "Islamic Finance Workshop", date: "Dec 15th" },
          ].map((event, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-gray-600">{event.date}</p>
              </div>
              <Link
                href={`/event/${index}`}
                className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 flex items-center"
              >
                Register <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;

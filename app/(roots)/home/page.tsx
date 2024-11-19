"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bell, Moon, Search, Sun } from "lucide-react";
import Link from "next/link";
import LogoBrand from "@/components/shared/logoBrand";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real application, you would apply the dark mode class to the root element here
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100 ${
        darkMode ? "dark" : ""
      }`}
    >
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Assalamu Alaikum, [User's Name]!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            "Indeed, Allah is with those who fear Him and those who are doers of
            good." - Quran 16:128
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-6 py-3">
            Explore Today's Reflection
          </Button>
        </section>

        {/* Quick Access Cards */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Daily Quran Reading</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Current: Surah Al-Baqarah, Ayah 255</p>
              <Button variant="link" className="p-0 h-auto">
                Continue Reading
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Dua of the Day</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2">"Rabbi zidni ilma"</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                My Lord, increase me in knowledge
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Tafsir Session: Understanding Surah Yusuf</p>
              <Button variant="link" className="p-0 h-auto">
                View All Events
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">The Importance of Gratitude in Islam</p>
              <Button variant="link" className="p-0 h-auto">
                Read More
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Personalized Feed */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Your Personalized Feed
          </h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="justify-center mb-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="quran">Quranic Insights</TabsTrigger>
              <TabsTrigger value="hadith">Hadith</TabsTrigger>
              <TabsTrigger value="community">Community Posts</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Card key={item}>
                    <CardContent className="p-6">
                      <img
                        src="/placeholder.svg?height=150&width=300"
                        alt="Post thumbnail"
                        className="w-full h-48 object-cover mb-4 rounded"
                      />
                      <h3 className="font-bold text-xl mb-2">
                        Understanding the Concept of Tawakkul
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Explore the Islamic principle of reliance on Allah and
                        its importance in our daily lives.
                      </p>
                      <Button variant="outline" className="w-full">
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Upcoming Events Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Upcoming Events
          </h2>
          <div className="flex space-x-6 overflow-x-auto pb-6">
            {[1, 2, 3, 4, 5].map((event) => (
              <Card key={event} className="w-80 flex-shrink-0">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Tafsir Session: Surah Al-Kahf
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    May 15, 2024 • 8:00 PM
                  </p>
                  <Button className="w-full">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Community Discussions Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">
            Community Discussions
          </h2>
          <div className="space-y-6">
            {[1, 2, 3].map((post) => (
              <Card key={post}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">
                    The Role of Patience in Islamic Character Building
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Discussing the importance of patience (sabr) in developing a
                    strong Islamic character and overcoming life's challenges.
                  </p>
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge>Faith</Badge>
                    <Badge>Character</Badge>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm">
                      Like
                    </Button>
                    <Button variant="ghost" size="sm">
                      Comment
                    </Button>
                    <Button variant="ghost" size="sm">
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

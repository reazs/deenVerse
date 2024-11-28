"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { BookOpen } from "lucide-react";
import {
  hadithChapterNames,
  HadithChapterProp,
} from "@/lib/islamic-data/hadith_chapter_names";

export default function HadithChaptersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredChapters = hadithChapterNames.filter((chapter) =>
    chapter.chapter_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Hadith Chapters</h1>
      <Input
        type="search"
        placeholder="Search chapters..."
        className="mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ScrollArea className="h-[calc(100vh-200px)] pr-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredChapters.map((chapter) => (
            <Card
              key={chapter.chapter_id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-emerald-500" />
                  Chapter {chapter.chapter_id}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{chapter.chapter_title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {filteredChapters.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No chapters found matching your search.
          </p>
        )}
      </ScrollArea>
    </div>
  );
}

"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Search } from "lucide-react";
import { hadiths } from "@/lib/islamic-data/hadiths";
import { hadithBookName } from "@/lib/islamic-data/hadith_book_name";
import React from "react";

export default function HadithChapterPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  // Unwrap the `params` promise
  const { id: chapterId } = React.use(params);

  const chapterHadiths = hadiths.filter(
    (hadith) => hadith.Chapter_ID == chapterId
  );

  const filteredHadiths = chapterHadiths.filter(
    (hadith) =>
      hadith.En_Text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hadith.En_Sanad.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getBookName = (bookId: number) => {
    const book = hadithBookName.find((book) => book.Book_ID === bookId);
    return book ? book.Book_Name : "Unknown Book";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Hadiths for Chapter {chapterId}
      </h1>
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="search"
          placeholder="Search hadiths..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ScrollArea className="h-[calc(100vh-200px)] pr-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredHadiths.map((hadith) => (
            <Card key={hadith.Hadith_ID} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-emerald-500" />
                    Hadith {hadith.Hadith_ID}
                  </div>
                  <Badge variant="outline">{getBookName(hadith.Book_ID)}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-semibold mb-2">
                  {hadith.En_Sanad.split(",")[0]}
                </p>
                <p className="text-gray-600 line-clamp-3">{hadith.En_Text}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {filteredHadiths.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No hadiths found matching your search.
          </p>
        )}
      </ScrollArea>
    </div>
  );
}

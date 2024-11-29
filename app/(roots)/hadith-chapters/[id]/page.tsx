"use client";

import { useState, useRef, useEffect } from "react";
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
import { BookOpen, ChevronLeft, Search } from "lucide-react";
import { hadiths } from "@/lib/islamic-data/hadiths";
import { hadithBookName } from "@/lib/islamic-data/hadith_book_name";
import React from "react";
import { hadithChapterNames } from "@/lib/islamic-data/hadith_chapter_names";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function HadithChapterPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleHadiths, setVisibleHadiths] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const { id: chapterId } = React.use(params);

  const chapterHadiths = hadiths.filter(
    (hadith) => hadith.Chapter_ID == chapterId
  );

  const filteredHadiths = chapterHadiths.filter(
    (hadith) =>
      hadith.En_Text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hadith.En_Sanad.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedHadiths = filteredHadiths.slice(0, visibleHadiths);

  const getCurrentChapterName = (chapterId: number) => {
    const chapter = hadithChapterNames.find((c) => c.chapter_id == chapterId);
    return chapter ? chapter.chapter_title : "Hadith Chapter " + chapterId;
  };

  const getBookName = (bookId: number) => {
    const book = hadithBookName.find((book) => book.Book_ID === bookId);
    return book ? book.Book_Name : "Unknown Book";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoading(true);
          setTimeout(() => {
            setVisibleHadiths((prev) =>
              Math.min(prev + 10, filteredHadiths.length)
            );
            setIsLoading(false);
          }, 400); // 0.4s delay
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [filteredHadiths.length]);

  return (
    <div>
      <div className=" lg:px-10 px-5">
        <Link className="flex" href={"/hadith-chapters/"}>
          <ChevronLeft /> Back to Hadith Chapters
        </Link>
      </div>
      ;
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          {getCurrentChapterName(chapterId)}
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
            {displayedHadiths.map((hadith) => (
              <Card key={hadith.Hadith_ID} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BookOpen className="mr-2 h-5 w-5 text-emerald-500" />
                      Hadith {hadith.Hadith_ID}
                    </div>
                    <Badge variant="outline">
                      {getBookName(hadith.Book_ID)}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="font-semibold mb-2">
                    {hadith.En_Sanad.split(",")[0]}
                  </p>
                  <p className="text-gray-600 line-clamp-3">{hadith.En_Text}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    className="w-full"
                    href={cn(
                      "/hadith-chapters/" + chapterId + "/" + hadith.Hadith_ID
                    )}
                  >
                    <button className="w-full btn btn-outline">
                      View Details
                    </button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          {displayedHadiths.length < filteredHadiths.length && (
            <div ref={loadMoreRef} className="flex justify-center mt-8">
              {isLoading && (
                <div className="loading loading-spinner loading-md"></div>
              )}
            </div>
          )}
          {filteredHadiths.length === 0 && (
            <p className="text-center text-gray-500 mt-8">
              No hadiths found matching your search.
            </p>
          )}
        </ScrollArea>
      </div>
    </div>
  );
}

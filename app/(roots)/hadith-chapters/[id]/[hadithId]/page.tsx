"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { hadiths } from "@/lib/islamic-data/hadiths";
import { hadithBookName } from "@/lib/islamic-data/hadith_book_name";
import { hadithChapterNames } from "@/lib/islamic-data/hadith_chapter_names";
import Link from "next/link";

interface HadithStatsProps {
  hadithId: number;
}

const HadithDetailPage = ({
  params,
}: {
  params: Promise<{ hadithId: number; id: number }>;
}) => {
  const router = useRouter();
  const { hadithId, id: chapterId } = React.use(params);

  const currentHadith = hadiths.find(
    (h) =>
      h.Hadith_ID === Number(hadithId) && h.Chapter_ID === Number(chapterId)
  );

  if (!currentHadith) {
    return <div className="container mx-auto px-4 py-8">Hadith not found</div>;
  }

  const chapterHadiths = hadiths.filter(
    (h) => h.Chapter_ID === currentHadith.Chapter_ID
  );
  const currentIndex = chapterHadiths.findIndex(
    (h) => h.Hadith_ID === Number(hadithId)
  );

  const prevHadith = chapterHadiths[currentIndex - 1];
  const nextHadith = chapterHadiths[currentIndex + 1];

  const getBookName = (bookId: number) => {
    const book = hadithBookName.find((book) => book.Book_ID === bookId);
    return book ? book.Book_Name : "Unknown Book";
  };

  const getChapterName = (chapterId: number) => {
    const chapter = hadithChapterNames.find(
      (chapter) => chapter.chapter_id == chapterId
    );
    return chapter ? chapter.chapter_title : "Unknown Chapter";
  };

  return (
    <div className="">
      <div className=" lg:px-10 px-5">
        <Link className="flex" href={"/hadith-chapters/" + chapterId}>
          <ChevronLeft /> Back to {getChapterName(chapterId)}
        </Link>
      </div>
      <div className="h-screen flex w-full justify-center items-center">
        <div className="max-w-screen-lg px-4">
          <h2 className="mt-10 scroll-m-20 border-b pb-2 md:text-3xl text-2xl font-semibold tracking-tight transition-colors first:mt-0 mb-10">
            {currentHadith.En_Sanad}
            <span className="text-sm text-gray-500 ml-2">
              (Hadith #{hadithId})
            </span>
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            {currentHadith.En_Text}
          </p>
          <div className="flex flex-col items-end mt-16 text-zinc-500 text-sm">
            <div className="text-start leading-7 border-t pt-5 max-w-[300px]">
              <p>
                <span className="font-bold">Book Name:</span>{" "}
                {getBookName(currentHadith.Book_ID)}
              </p>
              <p>
                <span className="font-bold">Chapter Name:</span>{" "}
                {getChapterName(currentHadith.Chapter_ID)}
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <Button
              variant="ghost"
              onClick={() =>
                prevHadith &&
                router.push(
                  `/hadith-chapters/${chapterId}/${prevHadith.Hadith_ID}`
                )
              }
              disabled={!prevHadith}
              className="flex items-center"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous Hadith
            </Button>
            <Button
              variant="ghost"
              onClick={() =>
                nextHadith &&
                router.push(
                  `/hadith-chapters/${chapterId}/${nextHadith.Hadith_ID}`
                )
              }
              disabled={!nextHadith}
              className="flex items-center"
            >
              Next Hadith
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HadithDetailPage;

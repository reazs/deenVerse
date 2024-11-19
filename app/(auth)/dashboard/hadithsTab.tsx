import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const HadithsTab = () => {
  const userContent = {
    posts: [
      {
        id: 1,
        content: "Alhamdulillah for another beautiful day!",
        likes: 15,
        comments: [
          { id: 1, user: "Fatima", content: "MashaAllah, indeed!" },
          { id: 2, user: "Ahmed", content: "May Allah bless us all." },
          { id: 3, user: "Zainab", content: "Ameen to that!" },
          { id: 4, user: "Ahmed", content: "May Allah bless us all." },
          { id: 5, user: "Zainab", content: "Ameen to that!" },
        ],
      },
      {
        id: 2,
        content:
          "Just finished reading Surah Al-Kahf. So many lessons to reflect upon.",
        likes: 28,
        comments: [
          { id: 1, user: "Omar", content: "It's such a beautiful surah." },
          { id: 2, user: "Aisha", content: "What was your favorite ayah?" },
        ],
      },
    ],
    hadiths: [
      {
        id: 1,
        content: "The best of you are those who are best to their families",
      },
      {
        id: 2,
        content: "Seeking knowledge is obligatory upon every Muslim",
      },
    ],
  };

  return (
    <div>
      <CardHeader>
        <CardTitle>Favorite Hadiths</CardTitle>
      </CardHeader>
      <CardContent>
        {userContent.hadiths.map((hadith) => (
          <div key={hadith.id} className="mb-4 p-4 bg-white rounded-lg shadow">
            <p>{hadith.content}</p>
          </div>
        ))}
      </CardContent>
    </div>
  );
};

export default HadithsTab;

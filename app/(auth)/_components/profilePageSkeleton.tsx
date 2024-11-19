import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProfilePageSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-b ">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Profile Info Skeleton */}
        <div className="mb-8">
          <CardContent className="pt-6 flex flex-col md:flex-row items-center md:items-start">
            <Skeleton className="w-24 h-24 md:w-40 md:h-40 rounded-full mb-4 md:mb-0 md:mr-8" />
            <div className="text-center md:text-left w-full md:w-2/3">
              <Skeleton className="h-8 w-48 mb-2" />
              <Skeleton className="h-4 w-32 mb-4" />
              <div className="flex justify-center md:justify-start space-x-4 mb-4">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-20" />
              </div>
              <Skeleton className="h-6 w-32 mb-4" />
              <div className="flex space-x-2">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
              </div>
            </div>
          </CardContent>
        </div>
        <Separator />
        {/* Create Post Skeleton */}
        <div className="mb-8">
          <CardContent className="pt-6">
            <Skeleton className="h-24 w-full mb-4" />
            <div className="flex justify-end">
              <Skeleton className="h-10 w-32" />
            </div>
          </CardContent>
        </div>

        {/* Tabs Skeleton */}
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="hadiths">Favorite Hadiths</TabsTrigger>
          </TabsList>
          <TabsContent value="posts">
            <div className="space-y-6">
              {[1, 2].map((post) => (
                <Card key={post}>
                  <CardContent className="p-6">
                    <Skeleton className="h-4 w-full mb-4" />
                    <Skeleton className="h-4 w-2/3 mb-4" />
                    <div className="flex items-center space-x-4 mb-4">
                      <Skeleton className="h-8 w-20" />
                      <Skeleton className="h-8 w-20" />
                      <Skeleton className="h-8 w-20" />
                    </div>
                    <div className="space-y-2 mb-4">
                      <Skeleton className="h-10 w-full" />
                      <Skeleton className="h-10 w-full" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                    <Skeleton className="h-10 w-full mb-2" />
                    <Skeleton className="h-8 w-24" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="hadiths">
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-48" />
              </CardHeader>
              <CardContent>
                {[1, 2].map((hadith) => (
                  <div
                    key={hadith}
                    className="mb-4 p-4 bg-white rounded-lg shadow"
                  >
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3 mt-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

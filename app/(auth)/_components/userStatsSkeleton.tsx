import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function UserStatsSkeleton() {
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
      </div>
    </div>
  );
}

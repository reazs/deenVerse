import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateUserInfo } from "@/hooks/useUpdateUserInfo";
import { useUserInfo } from "@/hooks/useUserInfo";
import { redirect } from "next/navigation";
import React from "react";

const EditUserProfile = () => {
  const { mutateAsync: updateUserInfo, isPending: isLoading } =
    useUpdateUserInfo();
  const { data: user, isPending: isLoadingUser } = useUserInfo();
  if (isLoadingUser) {
    return (
      <div className="h-full flex justify-center items-center w-full">
        Loading.....
      </div>
    );
  }
  if (!user) {
    return redirect("/login");
  }
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue={user.fullname}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue={user.username}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              defaultValue={user.email}
              disabled
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditUserProfile;

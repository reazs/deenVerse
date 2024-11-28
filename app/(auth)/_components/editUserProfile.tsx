import EditProfileForm from "@/components/forms/editProfileForm";
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
import React, { useState } from "react";

const EditUserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <div className="btn btn-outline">Edit Profile</div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <EditProfileForm user={user} onClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default EditUserProfile;

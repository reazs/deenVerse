"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { IUser } from "@/lib/models/User";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { editProfileSchema } from "@/lib/zodSchema/editProfileSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { useUpdateUserInfo } from "@/hooks/useUpdateUserInfo";

const EditProfileForm = ({
  user,
  onClose,
}: {
  user: IUser;
  onClose: () => void;
}) => {
  // react hook provider
  const { mutateAsync: updateUserInfo, isPending: isLoading } =
    useUpdateUserInfo();
  //  Defined the form
  const form = useForm<z.infer<typeof editProfileSchema>>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      fullname: user.fullname,
      username: user.username,
      email: user.email,
    },
  });

  //  defined the submit handler for the form
  async function onSubmit(values: z.infer<typeof editProfileSchema>) {
    const data = await updateUserInfo({
      username: values.username,
      email: values.email,
      fullname: values.fullname,
    });
    console.log(data, "------------>user has been updated <---------");
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {isLoading ? (
          <div className="flex h-full w-full items-center justify-center">
            <span className="loading loading-infinity loading-lg"></span>
          </div>
        ) : (
          <div>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full name</FormLabel>
                    <FormControl>
                      <Input placeholder={user.fullname} {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder={user.username} {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input disabled placeholder={user.email} {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        )}
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default EditProfileForm;

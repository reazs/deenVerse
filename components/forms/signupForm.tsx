"use client";
import loginFormSchema from "@/lib/zodSchema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import signupFormSchema from "@/lib/zodSchema/signupSchema";
import { Label } from "../ui/label";

const SignupForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordConfirm, setIsConfirmPassword] = useState(true);
  //   const [showPassword, setShowPassword] = useState(false);
  //  Defined the form
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
    },
  });

  //  defined the submit handler for the form
  async function onSubmit(values: z.infer<typeof signupFormSchema>) {
    if (values.password === confirmPassword) {
      const { fullname, username, email, password } = values;
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
          email,
          password,
        }),
      });

      if (res.ok) {
        router.push("/login");
      } else {
        const data = await res.json();
        setError(data.error);
      }

      setIsConfirmPassword(true);
    } else {
      setIsConfirmPassword(false);
    }
  }
  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="fullname"
          //   disabled={true}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Khalid ibn al-Walid" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          //   disabled={true}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="deenseeker" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          //   disabled={true}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@email.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          //   disabled={true}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-2" />

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            onChange={(e) => handleConfirmPassword(e)}
            id="confirmPassword"
            type="password"
            // disabled={true}
            placeholder="Confirm your password"
            required
          />
        </div>
        <div className="mt-4" />
        {isPasswordConfirm ? (
          ""
        ) : (
          <p className="w-full text-red-400 p-2 bg-rose-300/15 ">
            Passowrd did not match!
          </p>
        )}
        <div className="mt-4" />
        <Button
          // disabled={true}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          Create Account
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;

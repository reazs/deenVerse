import React from "react";
import { Josefin_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const JosefinSans = Josefin_Sans({ weight: "400", subsets: ["latin"] });
const LogoBrand = () => {
  return (
    <a className={cn("btn btn-ghost gap-0 text-2xl ", JosefinSans.className)}>
      <Image
        className="mr-1"
        src={"/islamic.png"}
        alt="logo-img"
        height={34}
        width={34}
      />{" "}
      deenVerse
    </a>
  );
};

export default LogoBrand;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const MobileAppPromo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Get the DeenVerse App</h2>
          <p className="text-gray-600 mb-6">
            Access Islamic knowledge and connect with the community anytime,
            anywhere.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 flex items-center"
            >
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="App Store"
                width={24}
                height={24}
                className="mr-2"
              />
              App Store
            </Link>
            <Link
              href="#"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 flex items-center"
            >
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Google Play"
                width={24}
                height={24}
                className="mr-2"
              />
              Google Play
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg?height=400&width=300"
            alt="DeenVerse App"
            width={300}
            height={400}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileAppPromo;

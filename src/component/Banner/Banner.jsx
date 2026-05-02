import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/17791314/pexels-photo-17791314.jpeg')] h-screen w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Make Your Qurbani Meaningful This Eid{" "}
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Choose from a wide range of healthy and well-cared animals.{" "}
          </p>

          <div className="flex gap-4">
            <Link href="/animals">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                🟢 Browse Animals 
              </Button>
            </Link>

            <Link href="/pricing">
              <Button variant="outline" className="text-white">
                ⚪ Learn Qurbani Tips
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

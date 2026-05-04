"use client"
import { authClient } from "@/app/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = authClient.useSession()
  const users = user.data?.user
  console.log(users);
 


  const handleSignOut =async()=>{
toast.success("log out successful")
  await authClient.signOut();

  }
  if(!user){
  }
  return (
    <div className="border-b px-2 relative top-0">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
           <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          
          <h3 className="font-black md:text-lg">QurabanirHatt</h3>
        </div>

        <ul className="hidden md:flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/animals"}>All Animals</Link>
          </li>
         
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
          <li >
              <Link href={"/auth/signup"}><Button>Sign Up</Button></Link>
            </li>
        </ul>

        <div className="flex gap-5">
          {!users && <ul className="flex items-center gap-2.5 text-[10px]  text-sm">
            <li className="hidden md:flex">
              <Link href={"/auth/signup"}><Button>Sign Up</Button></Link>
            </li>
            <li>
              <Link href={"/auth/signin"}><Button variant="outline">Sign In</Button></Link>
            </li>
          </ul>}
          {
          users && <Button onClick={()=>{
            handleSignOut()
          }}>Log Out</Button>
          
          }
        </div>
      </nav>
       {isMenuOpen && (
        <div className="absolute bg-white border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
             <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/animals"}>All Animals</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
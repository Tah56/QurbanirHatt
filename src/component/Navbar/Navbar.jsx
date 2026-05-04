"use client"
import { authClient } from "@/app/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

const Navbar = () => {
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
          {/* <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          /> */}
          <h3 className="font-black text-lg">QurabanirHatt</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/animals"}>All Animals</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-5">
          {!users && <ul className="flex items-center gap-2.5  text-sm">
            <li>
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
    </div>
  );
};

export default Navbar;
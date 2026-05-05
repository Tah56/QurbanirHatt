"use client";
import { Avatar, Card } from "@heroui/react";
import React from "react";
import { authClient } from "../lib/auth-client";
import { UpdateProfile } from "@/component/UpdateProfile/UpdateProfile";

const Profile = () => {
  const users = authClient.useSession();
  const user = users.data?.user;
  return (
    <div className="mt-5">
      <Card className="cursor-pointer w-70 md:w-96  mx-auto h-[40vh] ">
        <div className=" flex flex-col items-center justify-center space-y-2.5">
          <Avatar>
            <Avatar.Image
              alt={user?.name}
              src={user?.image}
              referrerPolicy="no-referrer"
            />
            <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
          </Avatar>
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </div>
            <div>
                <UpdateProfile></UpdateProfile>
            </div>
      </Card>
    </div>
  );
};

export default Profile;

"use client";
import { Avatar, Card } from "@heroui/react";
import React from "react";
import { authClient } from "../lib/auth-client";
import { UpdateProfile } from "@/component/UpdateProfile/UpdateProfile";

const Profile = () => {
  const users = authClient.useSession();
  const user = users.data?.user;
  return (
    <div className=" mt-5">
      <Card className="cursor-pointer w-70 md:w-96 flex flex-col justify-between items-center mx-auto h-[40vh] ">
        <div className=" flex flex-col items-center justify-between space-y-10">
          <Avatar>
            <Avatar.Image
              alt={user?.name}
              src={user?.image}
              referrerPolicy="no-referrer"
            />
            <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
          </Avatar>
          <div>

          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
          </div>
        </div >
            <div className=" flex flex-col items-center justify-center">
                <UpdateProfile></UpdateProfile>
            </div>
      </Card>
    </div>
  );
};

export default Profile;

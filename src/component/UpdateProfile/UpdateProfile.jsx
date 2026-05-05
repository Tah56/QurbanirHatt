"use client";

import { authClient } from "@/app/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { redirect } from "next/navigation";
import { RxAvatar } from "react-icons/rx";
import { toast } from "react-toastify";

export function UpdateProfile() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const Userdata = Object.fromEntries(formData.entries());
    console.log(Userdata);

    await authClient.updateUser({
      image: Userdata.image,
      name: Userdata.name,
    });
  };
  return (
    <Modal>
      <Button variant="secondary">Update Info</Button>
      <Modal.Backdrop>
        <Modal.Container placement="top">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <RxAvatar className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Info</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted"></p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
                  onSubmit={onSubmit}
                  className="flex flex-col justify-between gap-4"
                >
                  <TextField
                  isRequired
                    className="w-full"
                    name="name"
                    type="text "
                     validate={(value) => {
                      if (value.length <0) {
                        return "Name must be at least 3 characters";
                      }
                      return null;
                    }}
                   
                  >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="text" >
                    <Label>Email</Label>
                    <Input placeholder="Enter your image URL" />
                  </TextField>
                  <div className="flex items-end justify-end gap-4 pt-10">
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      onClick={() => {
                        toast.success("profile update success");
                      }}
                      slot="close"
                    >
                      Save
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

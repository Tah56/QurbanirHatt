"use client";


import { authClient } from "@/app/lib/auth-client";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export function UpdateProfile() {

     const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const Userdata = Object.fromEntries(formData.entries());
    await authClient.updateUser({
    image: Userdata.image,
    name: Userdata.name
})
    if(data){
        toast.success("profile update success")
      
       
    }else{
      toast.error("Profile update failed")
    }
    
    
  };
  return (
    <Modal>
      <Button variant="secondary">Buy now</Button>
      <Modal.Backdrop>
        <Modal.Container placement="top">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <RxAvatar className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Buyer Info</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
               
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="text">
                    <Label>Email</Label>
                    <Input placeholder="Enter your image URL" />
                  </TextField>
                 
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button onClick={()=>{
                toast.success("order confirm")
              }} slot="close">Buy now</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
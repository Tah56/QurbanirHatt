"use client"
import { authClient } from '@/app/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { redirect } from 'next/navigation';
import { GrGoogle } from 'react-icons/gr';
import { toast } from 'react-toastify';


const SignInPage = () => {
  const handleGoogleSignIn=async()=>{
     const data = await authClient.signIn.social({
    provider: "google",
  });
  }
      const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const Userdata = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      email: Userdata.email,
      password: Userdata.password,  
    });
    if(data){
        toast.success("login success")
        redirect("/")
       
    }else{
      toast.error("login failed")
    }
    
    
  };
    return (
            <div className="container mx-auto flex items-center justify-center py-20 ">
              <Form
                className="flex w-96 flex-col gap-4 shadow-2xl p-10 rounded-2xl"
                onSubmit={onSubmit}>
                <TextField
                  isRequired
                  name="email"
                  type="email"
                  validate={(value) => {
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                      return "Please enter a valid email address";
                    }
                    return null;
                  }}
                >
                  <Label>Email</Label>
                  <Input placeholder="john@example.com" />
                  <FieldError />
                </TextField>
                <TextField
                  isRequired
                  minLength={8}
                  name="password"
                  type="password"
                  validate={(value) => {
                    if (value.length < 8) {
                      return "Password must be at least 8 characters";
                    }
                    if (!/[A-Z]/.test(value)) {
                      return "Password must contain at least one uppercase letter";
                    }
                    if (!/[0-9]/.test(value)) {
                      return "Password must contain at least one number";
                    }
                    return null;
                  }}
                >
                  <Label>Password</Label>
                  <Input placeholder="Enter your password" />
                  <Description>
                    Must be at least 8 characters with 1 uppercase and 1 number
                  </Description>
                  <FieldError />
                </TextField>
                <div className="flex gap-2">
                  <Button type="submit">
                    <Check />
                    Submit
                  </Button>
                  <Button type="reset" variant="secondary">
                    Reset
                  </Button>
                </div>
              <p className='text-center'>OR</p>
              <div className='flex items-center justify-center '>

              <Button onClick={handleGoogleSignIn} className="w-full"><GrGoogle/>Sign with Google</Button>
              </div>
              </Form>
            </div>
    )

};

export default SignInPage;
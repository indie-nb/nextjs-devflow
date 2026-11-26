"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";

import {signIn} from "next-auth/react"
import { ROUTES } from "@/constants/routes";

const SocialAuthForm = () => {
  const buttonClassName =
    "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5";
  const handleSignIn = async (provider: "github" | "google") => {
    try {
     await signIn(provider, { redirectTo: ROUTES.HOME})
    }
    catch(error) {
      console.log(error)
      toast.error("Sign In Failed", {
        description: error instanceof Error ? error.message: "An error occurred during Sign In",
      })
    }

  }

  return (
    <>
      <Button className={buttonClassName} onClick={() => handleSignIn('github')}>
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        ></Image>
        <span>Log in with Github</span>
      </Button>

      <Button className={buttonClassName} onClick={() => handleSignIn('google')}>
        <Image
          src="/icons/google.svg"
          alt="Google Logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        ></Image>
        <span>Log in with Google</span>
      </Button>
    </>
  );
};

export default SocialAuthForm;

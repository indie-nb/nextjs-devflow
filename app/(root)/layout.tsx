
import Navbar from "@/components/navigation/navbar";
import React from "react";
import { auth } from "@/auth";

export const instant = false;


const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default RootLayout;

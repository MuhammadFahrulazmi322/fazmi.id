import Navbar from "@/components/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="max-container">{children}</main>
      Footer
    </>
  );
};

export default layout;

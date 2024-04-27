import Navbar from "@/components/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-container">
      <Navbar />
      {children}
      Footer
    </main>
  );
};

export default layout;

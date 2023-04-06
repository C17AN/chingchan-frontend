import React, { ReactNode } from "react";
import BottomNavbar from "../common/BottomNavbar";

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {children}
      {/* <BottomNavbar /> */}
    </div>
  );
};

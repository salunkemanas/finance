import { Header } from "@/components/ui/header";
import type { ReactNode } from "react";
const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="px-3 lg:px-14">{children}</div>
    </>
  );
};

export default DashboardLayout;

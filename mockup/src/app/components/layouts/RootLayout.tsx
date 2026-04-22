import { Outlet } from "react-router";
import { Toaster } from "../ui/sonner";

export function RootLayout() {
  return (
    <div className="size-full">
      <Outlet />
      <Toaster />
    </div>
  );
}

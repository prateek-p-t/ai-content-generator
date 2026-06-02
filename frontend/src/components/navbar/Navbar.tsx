"use client";

import { Bell, Search, LogOut } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import MobileSidebar from "@/components/sidebar/MobileSidebar";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <header className="h-16 border-b bg-background flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-3">
        <MobileSidebar />

        <div className="hidden md:flex items-center gap-2 border rounded-lg px-3 py-2 w-80">
          <Search size={18} />

          <input
            placeholder="Search..."
            className="outline-none bg-transparent w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <Bell size={20} />

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 border rounded-lg px-3 py-2 hover:bg-muted transition"
        >
          <LogOut size={18} />
          <span className="hidden md:inline">Logout</span>
        </button>

        <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
          P
        </div>
      </div>
    </header>
  );
}
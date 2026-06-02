"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const menuItems = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Generate", href: "/dashboard/generate" },
  { title: "History", href: "/dashboard/history" },
  { title: "Templates", href: "/dashboard/templates" },
  { title: "Profile", href: "/dashboard/profile" },
  { title: "Settings", href: "/dashboard/settings" },
];

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-64">
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-6">
            AI Generator
          </h2>

          <nav className="space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-4 py-3 hover:bg-muted"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
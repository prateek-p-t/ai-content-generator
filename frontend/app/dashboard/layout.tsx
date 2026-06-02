import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import AuthGuard from "@/components/AuthGuard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1">
          <Navbar />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </AuthGuard>
  );
}
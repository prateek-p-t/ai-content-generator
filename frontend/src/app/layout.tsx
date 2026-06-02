import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "AI Content Generator",
  description: "Generate content using AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
  <Toaster position="top-right" />
  {children}
</body>
    </html>
  );
}